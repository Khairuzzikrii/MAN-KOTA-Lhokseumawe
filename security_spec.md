# Security Specification: MAN Kota Lhokseumawe Portal

This security specification implements standard Attribute-Based Access Control (ABAC) gates to protect the school portal from malicious inputs, privilege escalations, or data leaks.

## 1. Data Invariants

1. **Information Seeding & Management Isolation**:
   - `news`, `teachers`, `gallery`, `agendas`, and `downloads` can be read by anyone (unauthenticated read is allowed for public school presence).
   - Only authenticated Admin users (either having the email `khairuzzikriii@gmail.com` or explicitly defined in the `/admins/` collections) are permitted to create, update, or delete entries in these catalogs.
   
2. **Contact Feedback Protections**:
   - Any external visitor can submit a `feedback` document.
   - External visitors cannot update or delete submitted feedbacks.
   - Only validated Admins can list, read, or set feedbacks as read.

3. **PPDB Registration Privacy**:
   - Prospective students can submit enrollment files (`ppdb` collection).
   - Only Admins and the specific applicant (identified by verified email matching `resource.data.email`) can view their submissions. 
   - No prospective student can self-approve their submission (`status` can only be changed by an Admin user).

---

## 2. The "Dirty Dozen" Payloads (Denied Scenarios)

The following payloads represent attacks targeting role bypasses, status shortcutting, or denial-of-service/wallet injection.

1. **Payload 1: Anonymous News Creation**
   - Attempt to add a News document without authentication.
2. **Payload 2: Self-Admin Injection**
   - Attempt to register a document in `/admins/{uid}` directly by a non-admin user.
3. **Payload 3: Arbitrary News Deletion**
   - Attempt by an authenticated non-admin user to delete official news.
4. **Payload 4: PPDB Status Self-Verification**
   - Attempt to submit a PPDB application with `status = "Verified"` directly from the client.
5. **Payload 5: PPDB Status Shortcut Hack**
   - Attempt to update an existing PPDB application status from `Pending` to `Verified` by the submitting student.
6. **Payload 6: PPDB Private Data Scraping**
   - Attempt by student A to read PPDB document of student B.
7. **Payload 7: Large String Denial of Wallet**
   - Attempt to submit feedback containing a 2MB message string.
8. **Payload 8: News Shadow Update (Ghost Field Injection)**
   - Attempt to inject an unvalidated key `'isSpecial': true` on update.
9. **Payload 9: Unbounded Gallery Array Attack**
   - Attempt to write malicious or oversized array data structures into gallery tags.
10. **Payload 10: Feedback Read State Overwrite**
    - Attempt by an unauthenticated visitor to modify read state / delete feedbacks.
11. **Payload 11: Teacher Profile Ransom**
    - Attempt by an authenticated non-admin to update teacher record.
12. **Payload 12: Invalid ID Poisoning**
    - Attempt to create a document with an ID containing exploit strings (e.g. `../../../exploit`).

---

## 3. The Test Runner (`firestore.rules.test.ts`)

```typescript
import {
  initializeTestEnvironment,
  RulesTestEnvironment,
} from '@firebase/rules-unit-testing';
import { doc, getDoc, setDoc, deleteDoc } from 'firebase/firestore';

let testEnv: RulesTestEnvironment;

describe('MAN Lhokseumawe Security Rules', () => {
  beforeAll(async () => {
    testEnv = await initializeTestEnvironment({
      projectId: 'melodic-premise-6h7sp',
      firestore: {
        host: 'localhost',
        port: 8080,
      },
    });
  });

  afterAll(async () => {
    await testEnv.cleanup();
  });

  it('denies anonymous creating news (Payload 1)', async () => {
    const unauthDb = testEnv.unauthenticatedContext().firestore();
    await expect(
      setDoc(doc(unauthDb, 'news/news-1'), {
        title: 'Mock News',
        slug: 'mock-news',
        content: 'Content',
        category: 'Berita',
        date: '2026-05-30',
        imageUrl: 'https://images.unsplash.com/photo-1544717305-2782549b5136',
        author: 'Author',
        views: 0,
      })
    ).rejects.toThrow();
  });

  it('denies self-admin injection (Payload 2)', async () => {
    const maliciousDb = testEnv.authenticatedContext('user_123', { email: 'hacker@gmail.com' }).firestore();
    await expect(
      setDoc(doc(maliciousDb, 'admins/user_123'), {
        email: 'hacker@gmail.com',
        role: 'Admin',
      })
    ).rejects.toThrow();
  });

  it('denies arbitrary news deletion by standard users (Payload 3)', async () => {
    const normalUserDb = testEnv.authenticatedContext('student_1', { email: 'student1@gmail.com' }).firestore();
    await expect(
      deleteDoc(doc(normalUserDb, 'news/news-1'))
    ).rejects.toThrow();
  });

  it('denies status pre-verification during registration (Payload 4)', async () => {
    const prepDb = testEnv.unauthenticatedContext().firestore();
    await expect(
      setDoc(doc(prepDb, 'ppdb/applicant-1'), {
        regNumber: 'PPDB-2026-0001',
        fullName: 'Hacker Name',
        nisn: '1234567',
        email: 'hacker@gmail.com',
        phone: '0812345678',
        schoolOrigin: 'SMP 1',
        birthDate: '2010-01-01',
        birthPlace: 'Lhokseumawe',
        gender: 'L',
        religion: 'Islam',
        address: 'Aceh',
        guardianName: 'Guardian',
        guardianPhone: '0812345678',
        raporScore: 90,
        status: 'Verified', // Maliciously pre-verified
        createdAt: '2026-05-30T10:22:14Z',
        submittedFiles: { rapor: true, kk: true, ijazah: true },
      })
    ).rejects.toThrow();
  });

  it('denies editing PPDB status by student (Payload 5)', async () => {
    const studentDb = testEnv.authenticatedContext('student_1', { email: 'student1@gmail.com' }).firestore();
    await expect(
      setDoc(doc(studentDb, 'ppdb/applicant-1'), {
        status: 'Verified',
      }, { merge: true })
    ).rejects.toThrow();
  });
});
```

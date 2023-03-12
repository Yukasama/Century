import * as admin from "firebase-admin";
import { getApps } from "firebase-admin/app";

const serviceAccountKey = require("../serviceAccountKey.json");

if (!getApps().length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccountKey),
  });
}

const adminDb = admin.firestore();

export { adminDb };

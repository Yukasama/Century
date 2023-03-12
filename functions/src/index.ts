import * as functions from "firebase-functions";
import { adminDb } from "../../firebaseAdmin";
import * as admin from "firebase-admin";

const fetchResults: any = async (id: string) => {
  const apiKey = process.env.BRIGHTDATA_API_KEY;

  const res = await fetch(`https://api.brightdata.com/dca/dataset?id=${id}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${apiKey}`,
    },
  });

  const data = await res.json();

  if (data.status === "building" || data.status === "collecting") {
    console.log("Not collected yet, retrying fetch...");
    return fetchResults(id);
  }

  return data;
};

export const onScraperComplete = functions.https.onRequest(
  async (request, response) => {
    const { success, id } = request.body;

    if (!success) {
      await adminDb.collection("searches").doc(id).set(
        {
          status: "error",
          updatedAt: admin.firestore.Timestamp.now(),
        },
        { merge: true }
      );
    }

    const data = await fetchResults();

    await adminDb.collection("searches").doc(id).set(
      {
        status: "complete",
        updatedAt: admin.firestore.Timestamp.now(),
        results: data,
      },
      { merge: true }
    );

    console.log("Finished scraping!");
    response.send("Scraping Function complete.");
  }
);

//NGROK URL: https://f910-134-19-93-253.eu.ngrok.io/century-daaf0/us-central1/onScraperComplete

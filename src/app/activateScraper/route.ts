import { NextRequest, NextResponse } from "next/server";
import { adminDb } from "../../../firebaseAdmin";

export async function POST(req: NextRequest) {
  try {
    const { search } = await req.json();

    const response = await fetch(
      "https://api.brightdata.com/dca/trigger?collector=c_lexm74zvmljm3vc9a&queue_next=1",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.BRIGHTDATA_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          search,
        }),
      }
    );

    const data = await response.json();

    const { collection_id, start_eta } = data;

    await adminDb.collection("searches").doc(collection_id).set({
      search,
      start_eta,
      status: "pending",
      createdAt: start_eta,
    });

    NextResponse.json({
      collection_id,
      start_eta,
    });
  } catch (err: any) {
    console.log("Error: " + err.message);
    NextResponse.json({
      error: err.message,
    });
  }
}

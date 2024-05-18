import { NextResponse } from "next/server";
import fs from "fs";
import * as dotenv from "dotenv";
import OpenAI from "openai";
import { env } from "../../config/env";
import { createClient } from "@deepgram/sdk";
dotenv.config();

const openai = new OpenAI({
  apiKey: env.OPENAI_API_KEY,
});

export async function POST(req) {
  const deepgram = createClient(process.env.DEEPGRAM_API_KEY);
  const body = await req.json();
  const base64Audio = body.audio;
  const audio = Buffer.from(base64Audio, "base64");
  const filePath = `tmp/audio-${new Date().toISOString().split('T')[0]}.wav`;

  try {
    fs.writeFileSync(filePath, audio);
    const { result, error } = await deepgram.listen.prerecorded.transcribeFile(

      fs.readFileSync(filePath),

      {
        model: "nova-2",
        smart_format: true,
      }
    );

    if (error) throw error;
    // STEP 4: Print the results
    if (!error) console.dir(result, { depth: null });

    fs.unlinkSync(filePath);

    return NextResponse.json({ text: result.results.channels[0].alternatives[0].transcript });
  } catch (error) {
    console.error("Error processing audio:", error);
    return NextResponse.error();
  }
}

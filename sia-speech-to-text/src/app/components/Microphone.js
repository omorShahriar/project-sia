"use client";

import { useRecordVoice } from "@/hooks/useRecordVoice";
import { IconMicrophone } from "@/app/components/IconMicrophone";
import { motion as m } from "framer-motion"
const Microphone = () => {
  const { startRecording, stopRecording, text, recording } = useRecordVoice();

  return (
    <div className="flex flex-col justify-center items-center rounded-lg bg-white">
      <m.button
        whileTap={{ scale: 0.9, transition: { duration: 0.1 } }}
        onMouseDown={startRecording}
        onMouseUp={stopRecording}
        onTouchStart={startRecording}
        onTouchEnd={stopRecording}
        style={{
          backgroundColor: recording ? "#151515" : "transparent",
          color: recording ? "white" : "black"
        }}
        className="border  w-20 shadow p-4"
      >
        <IconMicrophone />
      </m.button>
    </div>
  );
};

export { Microphone };

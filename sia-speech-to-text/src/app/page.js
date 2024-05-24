import { Microphone } from "@/app/components/Microphone";
import ChatBox from "./components/ChatBox";

export default function Home() {
  return (
    <main className=" min-h-screen">
      <div className=" grid grid-cols-12 h-screen">
        <div className="h-screen sticky top-0 left-0 grid place-content-center col-span-3 bg-slate-200">
          <Microphone />
        </div>
        <div className="col-span-9 p-4 h-screen">
          <ChatBox />
        </div>

      </div>

      <div>

      </div>
    </main>
  );
}

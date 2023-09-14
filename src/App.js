import React from "react";
import { RecoilRoot } from "recoil";
import AudioPlayer from "./components/AudioPlayer";

function App() {
  return (
    <RecoilRoot>
      <div className="bg-gray-100 min-h-screen p-4">
        <h1 className="text-3xl font-semibold mb-4">Mashoor</h1>
        <AudioPlayer />
      </div>
    </RecoilRoot>
  );
}

export default App;

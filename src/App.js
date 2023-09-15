// App.js
import React from "react";
import { RecoilRoot } from "recoil";
import AudioPlayer from "./components/AudioPlayer";
import Popular from "./assets/Popular.jpg";

function App() {
  return (
    <RecoilRoot>
      <div className="bg-gray-100 min-h-screen flex flex-col items-center p-4">
        <h1 className="text-3xl font-semibold mb-4">Mashoor</h1>
        <img
          src={Popular}
          alt="Album Art"
          className="w-48 h-48 mb-4 rounded-lg"
        />
        <AudioPlayer />
      </div>
    </RecoilRoot>
  );
}

export default App;

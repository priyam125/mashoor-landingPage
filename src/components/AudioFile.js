import React from "react";

function AudioFile({ audio }) {
  return (
    <div>
      <h3 className="text-xl font-semibold">{audio.mainAudioFile.title}</h3>
      <audio controls>
        <source src={audio.mainAudioFile.url} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
}

export default AudioFile;

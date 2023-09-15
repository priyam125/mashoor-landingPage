import React from 'react';
import { useRecoilValue } from 'recoil';
import { audioFilesState } from '../store/index';
import AudioFile from './AudioFile';
import Dropdown from './Dropdown';

function AudioPlayer() {
  const audioFiles = useRecoilValue(audioFilesState);

  return (
    <div>
      {audioFiles.map((audio, index) => (
        <div key={index} className="mb-4">
          <AudioFile audio={audio} />
          <Dropdown audioFiles={audio} />
        </div>
      ))}
    </div>
  );
}

export default AudioPlayer;

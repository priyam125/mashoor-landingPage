import React from 'react';
import { useRecoilState } from 'recoil';
import { selectedDropdownState } from '../store/index';

function Dropdown({ audioFiles }) {
  const mainAudioFileId = audioFiles.mainAudioFile.id;
  const [selectedDropdown, setSelectedDropdown] = useRecoilState(selectedDropdownState);

  const toggleDropdown = () => {
    if (selectedDropdown === mainAudioFileId) {
      setSelectedDropdown(-1); // Close the dropdown
    } else {
      setSelectedDropdown(mainAudioFileId); // Open the dropdown
    }
  };

  return (
    <div className="relative">
      <button onClick={toggleDropdown} className="text-blue-500 focus:outline-none">
        {selectedDropdown === mainAudioFileId ? 'Close Dropdown' : 'Open Dropdown'}
      </button>
      {selectedDropdown === mainAudioFileId && (
        <div className="right-0 mt-2 p-2 bg-white border rounded shadow-lg mb-5">
          <ul className="mb-4">
            {audioFiles.dropdownFiles.map((file) => (
              <li key={file.id} className="mb-1">
                <audio controls>
                  <source src={file.url} type="audio/mpeg" />
                  Your browser does not support the audio element.
                </audio>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Dropdown;

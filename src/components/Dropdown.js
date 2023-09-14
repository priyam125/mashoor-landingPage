import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { openDropdownState, openDropdownIndexSelector } from "../store/index";

function Dropdown({ audioFiles }) {
  const isOpen = useRecoilValue(openDropdownIndexSelector);
  console.log(audioFiles);
  console.log(isOpen);
  console.log(audioFiles?.id);
  const [currentOpenIndex, setCurrentOpenIndex] =
    useRecoilState(openDropdownState);

  const toggleDropdown = () => {
    if (isOpen === audioFiles[0]?.mainAudioFile.id) {
      setCurrentOpenIndex(-1);
    } else {
      setCurrentOpenIndex(audioFiles[0]?.mainAudioFile.id);
    }
  };

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="text-blue-500 focus:outline-none"
      >
        {isOpen === audioFiles[0]?.mainAudioFile?.id
          ? "Close Dropdown"
          : "Open Dropdown"}
      </button>
      {isOpen === audioFiles[0]?.mainAudioFile?.id && (
        <div className="right-0 mt-2 p-2 bg-white border rounded shadow-lg mb-5">
          <ul className="mb-4">
            {audioFiles?.dropdownFiles.map((file) => (
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

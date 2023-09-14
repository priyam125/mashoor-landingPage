import { atom, selector } from "recoil";
import { audioFilesData } from "../utils";

// Atom for storing audio files data
export const audioFilesState = atom({
  key: "audioFilesState",
  default: audioFilesData, // Initialize with your provided data
});

// Atom for managing the open/closed state of dropdowns
export const openDropdownState = atom({
  key: "openDropdownState",
  default: -1, // Use -1 to indicate no dropdown is open initially
});

// Selector to get the currently open dropdown index
export const openDropdownIndexSelector = selector({
  key: "openDropdownIndexSelector",
  get: ({ get }) => {
    return get(openDropdownState);
  },
});

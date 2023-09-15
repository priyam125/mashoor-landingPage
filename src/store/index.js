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

export const dropdownOpenState = atom({
  key: "dropdownOpenState",
  default: {}, // An empty object to store the open/close state of each dropdown
});


export const selectedDropdownState = atom({
  key: 'selectedDropdownState',
  default: -1, // Initialize with -1 to indicate no dropdown is selected initially
});
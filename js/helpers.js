import { contactColors } from "./general-data.js";

export function calculateContactIconColor(contactShortcut) {
  const correctShortcut = contactShortcut.toUpperCase();

  const firstNameLetter = correctShortcut[0] || "X";
  const LastNameLetter = correctShortcut[1] || firstNameLetter;

  const value1 = firstNameLetter.charCodeAt(0) - 65;
  const value2 = LastNameLetter.charCodeAt(0) - 65;

  const r = (40 + value1 * 7).toFixed(0);
  const g = (40 + value2 * 7).toFixed(0);
  const b = (40 + (25 - value2) * 7).toFixed(0);

  return `rgba(${r} ${g} ${b} / 100%)`;
}


export function getRandomContactColor() {
  const randomIndex = Math.floor(Math.random() * contactColors.length);
  return contactColors[randomIndex];
}

export function getInitials(name) {
  const words = name.trim().split(/\s+/);
  const firstLetter = words[0][0];
  const lastLetter = words.length > 1 ? words[words.length - 1][0] : "";

  return (firstLetter + lastLetter).toUpperCase();
}
import {hexToRGB} from './formatColor.mjs'
import namedColors from '../data/named-colors-without-neutrals.json'
const namedColorsValues = Object.values(namedColors)
const namedColorsKeys = Object.keys(namedColors)

// ❤️ Lovingly stolen from https://www.cyotek.com/blog/finding-nearest-colors-using-euclidean-distance
export const getDistance = (currentHex, matchHex) => {
  const current = hexToRGB(currentHex)
  const match = hexToRGB(matchHex)
  
  const redDifference = current[0] - match[0];
  const greenDifference = current[1] - match[1];
  const blueDifference = current[2] - match[2];
  
  return redDifference * redDifference + greenDifference * greenDifference + blueDifference * blueDifference;
}

// ❤️ Lovingly stolen from https://www.cyotek.com/blog/finding-nearest-colors-using-euclidean-distance
export const findNearestColor = (colors, current) => {

  let shortestDistance = Math.pow(16,6)
  let index = 0;
  for (let i = 0; i < colors.length; i++) {
    const match = colors[i];
    const distance = getDistance(current, match);
    if (distance < shortestDistance) {
      index = i;
      shortestDistance = distance;
    }
  }
  return index;
}

export const findNearestNamedColor = (color) => {
  const index = findNearestColor(namedColorsValues, color)
  return {
    name: namedColorsKeys[index],
    hex: namedColorsValues[index]
  }
}
import twighlightColors from './quantumColors.mjs';
import { findNearestNamedColor } from "./nearestColor.mjs";

export default () => {
    const colors = twighlightColors();
    const sortedColors = {};
    colors.forEach(color => {
        const namedColor = findNearestNamedColor(color);
        if(sortedColors[namedColor.name]){
            sortedColors[namedColor.name].push(color)
        }else {
            sortedColors[namedColor.name] = [color]
        }
    });
    return sortedColors;
}
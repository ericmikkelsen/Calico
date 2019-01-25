import relativeLuminance from './relativeLuminance.mjs'
import {hexToRGB, HSLToRGB, RGBToHex} from './formatColor.mjs'

export const paletteHueShift = (hex) => {
    const rl = relativeLuminance(hex)
    const rgb = hexToRGB(hex)
    const lightSpace = 1 - rl
    const lightIncrement = lightSpace / 6;
    const lightValues = [];
    let i = 1;
    //  light
    while (lightValues.length < 5 || i >= 255) {
        const R = rgb[0] + i < 255 ? rgb[0] + i : 255;
        const G = rgb[1] + i < 255 ? rgb[1] + i : 255;
        const B = rgb[2] + i < 255 ? rgb[2] + i : 255;
        const hx = RGBToHex([R,G,B])
        const newRl = relativeLuminance(hx)
        if(newRl >= (lightValues.length + 1) * lightIncrement + rl ){
            lightValues.push(hx);
        }
        i++
    }
    lightValues.reverse()
    lightValues.push('#'+hex)
    const darkIncrement = rl / 6
    const darkValues = []
    i = 0;
    while (darkValues.length < 5 || i >= 255) {
        const R = rgb[0] - i > 0 ? rgb[0] - i : 0;
        const G = rgb[1] - i > 0 ? rgb[1] - i : 0;
        const B = rgb[2] - i > 0 ? rgb[2] - i : 0;
        const hx = RGBToHex([R,G,B])
        const newRl = relativeLuminance(hx)
        if(newRl <= rl - (darkValues.length + 1) * darkIncrement ){
            darkValues.push(hx)
        }
        i++
    }

    const palette = lightValues.concat(darkValues)
    return palette

}

const paletteFromHue = (hex) => {
    
}

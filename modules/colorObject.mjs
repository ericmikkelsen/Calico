import {hexToRGB,RGBToHSL } from './formatColor.mjs'
import {figureToGround} from './a11y.mjs'
import lum from './relativeLuminance.mjs'
import {findNearestNamedColor} from './nearestColor.mjs'
import paletteHueShift from '../modules/palette'

export default (hex) => {
    const rgb = hexToRGB(hex)
    const hsl = RGBToHSL(rgb)
    const againstBlack = figureToGround(hex, '000')
    const againstWhite = figureToGround(hex, 'fff')
    const name = findNearestNamedColor(hex)
    const a11y = {
        white: againstWhite.aaLg ? againstWhite : false ,
        black: againstBlack.aaLg ? againstBlack : false
    }
    const paletteByHueShift = paletteHueShift(hex)
    return {
        a11y: a11y,
        hex: hex,
        hsl: hsl,
        luminance: lum(hex),
        name: name.name,
        rgb: rgb,
        palette: {
            hue: paletteByHueShift
        }
    }
}
import {HSLToRGB,RGBToHex,RGBToHSL} from './formatColor.mjs'
import colorObject from './colorObject.mjs'

export default () => {
    const byHex = {}, byHue = []
    const q = {
        aa: {},
        aaa: {},
        aaLg: {},
        aaaLg: {}
    }
    let h = 0
    while (h < 360) {
        const hsl = [h, 100, 50]
        const rgb = HSLToRGB(hsl)
        const hex = RGBToHex(rgb)
        const color = colorObject(hex)
        
        byHex[hex] = color
        byHue[h] = color
        if (color.a11y.white && color.a11y.black) {
            if( color.a11y.white.aaa && color.a11y.black.aaa ){
                q.aaa[hex] = color
            }
            if( color.a11y.white.aa && color.a11y.black.aa ){
                q.aa[hex] = color
            }
            if( color.a11y.white.aaaLg && color.a11y.black.aaaLg ){
                q.aaaLg[hex] = color
            }
            if( color.a11y.white.aaLg && color.a11y.black.aaLg ){
                q.aaLg[hex] = color
            }
        }
        h += 1
    }
    return {byHex: byHex, byHue: byHue, q: q}
}
import {paletteFromLightness, paletteHueShift} from './palette.mjs'
import {cleanHex, hexToRGB, RGBToHex} from './formatColor.mjs'

export default ( hexColor ) => {
    const huePalette = paletteHueShift(hexColor)
    const lightnessPalette = paletteFromLightness(hexColor)
    const grid = [lightnessPalette]
   
    const rows = 10
    for (let rowIndex = 1; rowIndex < rows; rowIndex++) {
        const amountOfColor1 = rowIndex / rows
        const amountOfColor2 = 1 - amountOfColor1
        const p = []
        for (let colorIndex = 0; colorIndex < 11; colorIndex++) {

            const h = hexToRGB(huePalette[colorIndex])
            const l = hexToRGB(lightnessPalette[colorIndex])
            const newColor = h.map( (c,i) => {
                return (h[i] * amountOfColor1) + ( l[i] * amountOfColor2 )
            } )

            p.push(RGBToHex(newColor))
        }
        grid.push(p)

    }
    grid.push(huePalette
        )
    return grid
}
import paletteGrid from './modules/paletteGrid.mjs'
// import paletteTable from './templates/paletteTable.mjs'
// import html from './templates/html.mjs'
import colors from './data/quantumColors.json'
import {writeFile, access, constants} from 'fs'

for (let i = 0; i < colors.length; i++) {
    const color = colors[i]
    const file = `./data/palettes/${color}.json`
    access(file, constants.F_OK, (err) => {
        if(err){
            const palette = JSON.stringify(paletteGrid(color))
            writeFile(file, palette, (error) => {
                if (error) throw error;
            })
            return
        }
        return
    })      
}
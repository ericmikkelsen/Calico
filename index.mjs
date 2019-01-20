import {writeFileSync} from 'fs'
import colorObjects from './modules/colorObjects.mjs'
import quantumColors from './modules/quantumColors.mjs'
// templates
import colorList from './templates/ColorList.mjs'
import indexByName from './templates/indexByName.mjs'


// // contrast
// console.log( 'contrast between #D5E694 & #E6E694', contrastLevel('D5E694', 'E6E694') )

// // get hue
// console.log( 'hsl of D5E694', hexToHSL('#D5E694') )

// const hues = hueLuminance()
//console.log(util.inspect(hues.q.aa, false, null, true /* enable colors */))
// const hx3 = hex3()

const q = quantumColors()
const colors = colorObjects(q)

for (const name in colors.byName) {
    const c = Object.values(colors.byName[name])
    const ColorListMarkup = colorList(c)

    writeFileSync(`./dist/${name}.html`, '<link href="../style.css" rel="stylesheet"><body style="--color:'+name+'">'+ColorListMarkup+'</body>')
}

const indexMarkup = indexByName(Object.keys(colors.byName))
writeFileSync(`./dist/index.html`, '<link href="../style.css" rel="stylesheet">'+indexMarkup)





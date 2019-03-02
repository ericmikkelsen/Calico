import {writeFileSync} from 'fs'
import colorObjects from './modules/colorObjects.mjs'
// import quantumColors from './modules/quantumColors.mjs'
// templates
import colorList from './templates/ColorList.mjs'
import indexByName from './templates/indexByName.mjs'
import q from './data/quantumColors.json'

const colors = colorObjects(q)

for (const name in colors.byName) {
    const c = Object.values(colors.byName[name])
    const ColorListMarkup = colorList(c)
    writeFileSync(`./public/${name}.html`, '<link href="./styles/style.css" rel="stylesheet"><body style="--color:'+name+'">'+ColorListMarkup+'<script type="module" src="./modules/frontend/namedColor.mjs"></script></body>')
}
const indexMarkup = indexByName(Object.keys(colors.byName))
writeFileSync(`./public/index.html`, '<link href="./styles/style.css" rel="stylesheet">'+indexMarkup)





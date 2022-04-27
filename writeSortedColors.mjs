import {writeFileSync} from 'fs'
import sortedQuantumColors from './modules/quantumColorsSorted.js'

const colors = sortedQuantumColors();
writeFileSync('./data/sorted-colors.json',JSON.stringify(colors));
writeFileSync('./data/sorted-colors.js','export default ' + JSON.stringify(colors));





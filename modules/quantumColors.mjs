import {quantum} from "./a11y.mjs";

export default () => {
    const colors = []
    const total = Math.pow(16, 6);

    for (let index = 0; index < total; index++) {
        let currentColor = index.toString(16).padStart(6,'0');
        if( quantum(currentColor) ){
            colors.push(currentColor)
        }
    }
    return colors
}


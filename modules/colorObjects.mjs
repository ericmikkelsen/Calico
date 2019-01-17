import colorObject from './colorObject.mjs'

export default (colors) => {
    const hex = {}
    const lum = {}
    const aa = {}
    const aaa = {}
    const aaLg = {}
    const aaaLg = {}
    const named = {}

    colors.forEach( hx => {
        const color = colorObject(hx)
        hex[hx] = color
        let lumKey = color.luminance.toFixed(3).toString()
        if(!lum[lumKey]){
            lum[lumKey] = {}
            lum[lumKey][hx] = color
        } else {
            lum[lumKey][hx] = color
        }
        
        if (color.a11y.white && color.a11y.black) {
            if( color.a11y.white.aaa && color.a11y.black.aaa ){
                aaa[hx] = color
            }
            if( color.a11y.white.aa && color.a11y.black.aa ){
                aa[hx] = color
            }
            if( color.a11y.white.aaaLg && color.a11y.black.aaaLg ){
                aaaLg[hx] = color
            }
            if( color.a11y.white.aaLg && color.a11y.black.aaLg ){
                aaLg[hx] = color
            }
        }

        if(!named[color.name]){
            named[color.name] = {}
            named[color.name][hx] = color;
        } else {
            named[color.name][hx] = color;
        }
        

    });

    return {
        hex: hex,
        lum: lum,
        aa: aa,
        aaa: aaa,
        aaLg: aaLg,
        aaaLg: aaaLg,
        byName: named,
    }
}
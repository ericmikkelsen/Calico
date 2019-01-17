export default () => {

    const colors = []
    let r = 0
    let g = 0
    let b = 0
    // r gb
    while (r < 15) {
        colors.push( `#${r.toString(16)}${g.toString(16)}${b.toString(16)}` )
        while (g < 15) {
            colors.push( `#${r.toString(16)}${g.toString(16)}${b.toString(16)}` )
            while (b < 15) {
                colors.push( `#${r.toString(16)}${g.toString(16)}${b.toString(16)}` )
                b++
            }
            g++
        }
        r ++
        g = 0
        b = 0
    }
    // r bg
    r = 0;
    while (r < 15) {
        colors.push( `#${r.toString(16)}${g.toString(16)}${b.toString(16)}` )
        while (b < 15) {
            colors.push( `#${r.toString(16)}${g.toString(16)}${b.toString(16)}` )
            while (g < 15) {
                colors.push( `#${r.toString(16)}${g.toString(16)}${b.toString(16)}` )
                g++
            }
            g++
        }
        r ++
        g = 0
        b = 0
    }
    // g rb
    r = 0;
    while (g < 15) {
        colors.push( `#${r.toString(16)}${g.toString(16)}${b.toString(16)}` )
        while (r < 15) {
            colors.push( `#${r.toString(16)}${g.toString(16)}${b.toString(16)}` )
            while (b < 15) {
                colors.push( `#${r.toString(16)}${g.toString(16)}${b.toString(16)}` )
                b++
            }
            r++
        }
        g ++
        r = 0
        b = 0
    }
    // g br
    g = 0
    while (g < 15) {
        colors.push( `#${r.toString(16)}${g.toString(16)}${b.toString(16)}` )
        while (b < 15) {
            colors.push( `#${r.toString(16)}${g.toString(16)}${b.toString(16)}` )
            while (r < 15) {
                colors.push( `#${r.toString(16)}${g.toString(16)}${b.toString(16)}` )
                r++
            }
            b++
        }
        g ++
        r = 0
        b = 0
    }

    g = 0;
    while (b < 15) {
        colors.push( `#${r.toString(16)}${g.toString(16)}${b.toString(16)}` )
        while (r < 15) {
            colors.push( `#${r.toString(16)}${g.toString(16)}${b.toString(16)}` )
            while (g < 15) {
                colors.push( `#${r.toString(16)}${g.toString(16)}${b.toString(16)}` )
                g++
            }
            r++
        }
        b ++
        r = 0
        g = 0
    }
    b = 0
    while (b < 15) {
        colors.push( `#${r.toString(16)}${g.toString(16)}${b.toString(16)}` )
        while (g < 15) {
            colors.push( `#${r.toString(16)}${g.toString(16)}${b.toString(16)}` )
            while (r < 15) {
                colors.push( `#${r.toString(16)}${g.toString(16)}${b.toString(16)}` )
                r++
            }
            g++
        }
        b ++
        r = 0
        g = 0
    }
    return colors

}
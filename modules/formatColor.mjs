export const hexToRGB = (hexColor) => {
    const hex = cleanHex(hexColor);
    const RGB = [
        parseInt(hex.substr(0,2),16),
        parseInt(hex.substr(2,2),16),
        parseInt(hex.substr(4,2),16),
    ];
    return RGB;
}

export const hexToHue = (color) => {
    // https://gist.github.com/mjackson/5311256
    const RGB = typeof color === 'string' ? hexToRGB(color) : color
    const min = RGB.indexOf( Math.min.apply(null,RGB) )
    const max = RGB.indexOf( Math.max.apply(null,RGB) )
    const distance = max - min
    let hue = null
    const r = RGB[0]
    const g = RGB[1]
    const b = RGB[2]
    switch (max) {
        case min: hue = 0; break
        case 0: hue = (g - b) / distance + (g < b ? 6 : 0); break
        case 1: hue = (b - r) / distance + 2; break
        case 2: hue = (r - g) / distance + 4; break
    }
    return hue
}


export const RGBToHSL = (RGB) => {
  const r = RGB[0], g = RGB[1], b = RGB[2]

  var max = Math.max(r, g, b), min = Math.min(r, g, b);
  var h, s, l = (max + min) / 2;

  if (max == min) {
    h = s = 0; // achromatic
  } else {
    var d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

    switch (max) {
      case r: h = (g - b) / d + (g < b ? 6 : 0); break;
      case g: h = (b - r) / d + 2; break;
      case b: h = (r - g) / d + 4; break;
    }

    h /= 6;
  }

  return [ h, s, l ];
}

export const HSLToRGB = (hsl) => {
        const h = hsl[0] / 360
        const s = hsl[1] / 100
        const l = hsl[2] / 100
        var r, g, b;

        if(s == 0){
            r = g = b = l; // achromatic
        }else{
            var hue2rgb = function hue2rgb(p, q, t){
                if(t < 0) t += 1;
                if(t > 1) t -= 1;
                if(t < 1/6) return p + (q - p) * 6 * t;
                if(t < 1/2) return q;
                if(t < 2/3) return p + (q - p) * (2/3 - t) * 6;
                return p;
            }

            var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
            var p = 2 * l - q;
            r = hue2rgb(p, q, h + 1/3);
            g = hue2rgb(p, q, h);
            b = hue2rgb(p, q, h - 1/3);
        }

        return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
}

export const componentToHex = (color) => {
  const hex = color.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

export const RGBToHex = (RGB) => {
  return "#" + componentToHex(RGB[0]) + componentToHex(RGB[1]) + componentToHex(RGB[2])
}

export const cleanHex = ( hexColor ) => {
    // strip out hash
    let color = hexColor.replace('#','');
    return color.length === 3 ? color.split('').map(( character )=>{
        return character + character
    }).join(''): color;
}
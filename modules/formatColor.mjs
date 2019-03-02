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

// https://gist.github.com/emanuel-sanabria-developer/5793377
export const RGBToHSL = (RGB) => {
  const r = RGB[0] / 255 
  const g = RGB[1] / 255
  const b = RGB[2] / 255

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

// https://gist.github.com/emanuel-sanabria-developer/5793377
export const HSLToRGB = (hsl) => {
    const h = hsl[0]
    const s = hsl[1]
    const l = hsl[2]
    var r, g, b;

    if(s == 0){
        r = g = b = l; // achromatic
    }else{
        function hue2rgb(p, q, t){
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

    return [r * 255, g * 255, b * 255];
}

export const componentToHex = (color) => {
  const hex = Math.floor(color).toString(16);
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

export const RGBToCMYK = (rgb) => {
    // lovingly borrowed from http://www.javascripter.net/faq/rgb2cmyk.htm
    var computedC = 0;
    var computedM = 0;
    var computedY = 0;
    var computedK = 0;
   
    //remove spaces from input RGB values, convert to int
    var r = parseInt( (''+rgb[0]).replace(/\s/g,''),10 ); 
    var g = parseInt( (''+rgb[1]).replace(/\s/g,''),10 ); 
    var b = parseInt( (''+rgb[2]).replace(/\s/g,''),10 ); 
   
    if ( r==null || g==null || b==null ||
        isNaN(r) || isNaN(g)|| isNaN(b) )
    {
      alert ('Please enter numeric RGB values!');
      return;
    }
    if (r<0 || g<0 || b<0 || r>255 || g>255 || b>255) {
      alert ('RGB values must be in the range 0 to 255.');
      return;
    }
   
    // BLACK
    if (r==0 && g==0 && b==0) {
     computedK = 1;
     return [0,0,0,1];
    }
   
    computedC = 1 - (r/255);
    computedM = 1 - (g/255);
    computedY = 1 - (b/255);
   
    var minCMY = Math.min(computedC,
                 Math.min(computedM,computedY))
    computedC = (computedC - minCMY) / (1 - minCMY)
    computedM = (computedM - minCMY) / (1 - minCMY)
    computedY = (computedY - minCMY) / (1 - minCMY)
    computedK = minCMY;
   
    return [computedC,computedM,computedY,computedK]
   }

   export const hexToCMYK = (hex) => {
       const rgb = hexToRGB(hex)
       const cmyk = RGBToCMYK(rgb)
       return cmyk
   }

   export const CMYKToRGB = (cmyk) => {
    // https://www.rapidtables.com/convert/color/cmyk-to-rgb.html

    const r = 255 * (1-cmyk[0]) * (1-cmyk[3])
    const g = 255 * (1-cmyk[1]) * (1-cmyk[3])
    const b = 255 * (1-cmyk[2]) * (1-cmyk[3])
    return [r,g,b]

   }

   export const CMYKToHex = (cmyk) => {
    const rgb = CMYKToRGB(cmyk)
    const hex = RGBToHex(rgb)
    return hex
   }

   export const HSLToHex = (hsl) => {
    const rgb = HSLToRGB(hsl)
    return RGBToHex(rgb);
   }

   export const hexToHSL = (hex) => {
       const rgb = hexToRGB(hex)
       return RGBToHSL(rgb)
   }
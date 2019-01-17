import { hexToRGB } from "./formatColor.mjs";

export default ( hexColor ) => {
	// https://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef
	const RGB = hexToRGB( hexColor );

	const sRGB = RGB.map( c => {
		const C = c/255;
		if( C <= .03928 ){
			return C / 12.92;
		} else {
			return Math.pow( ( ( C + .055 ) / 1.055 ), 2.4 )  ;
		}
	})
	// 	   .2126 * R 	   + .7152 * G       + .0722 * B
	return .2126 * sRGB[0] + .7152 * sRGB[1] + .0722 * sRGB[2]; 
}

import relativeLuminance from './relativeLuminance.mjs';
/**
 * The 2 colors to compare
 * @param hexColor1 
 * @param hexColor2
 * @returns float that represents color contrast 
 */
export default ( hexColor1 = 'fff', hexColor2 = '000') => {

	const l1 = relativeLuminance( hexColor1 );
	const l2 = relativeLuminance( hexColor2 );

	const light = (l1 > l2 ? l1 : l2) + .05;
	const dark = (l1 < l2 ? l1 : l2 ) + .05;

	const contrast = light / dark;
	return contrast;
}

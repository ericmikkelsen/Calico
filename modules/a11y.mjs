import contrastLevel from "./contrastLevel.mjs"

export const figureToGround = ( figure = '767676', ground= '000') => { 
    const contrast = contrastLevel( figure, ground );
    return {
        aa: contrast >= 4.5 ? true : false,
        aaa: contrast >= 7 ? true : false,
        aaLg: contrast >= 3 ? true : false,
        aaaLg: contrast >= 4.5 ? true : false,
        contrast: contrast,
    }
}

export const figureLinkToGround = ( link='767676', body = '000000', ground = 'ffffff' ) => { 
    const linkToBody = contrastLevel( link, body );
    const linkToGround = contrastLevel( link, ground );
    const bodyToGround = contrastLevel( body, ground );
    return {
        linkToBody: linkToBody >= 3 ? true : false,
        linkToGround: linkToGround >= 4.5 ? true : false,
        bodyToGround: bodyToGround >= 4.5 ? true : false,
        aa: linkToBody >= 3 && linkToGround >= 4.5 && bodyToGround >= 4.5 ? true : false,
    }
}

export const quantum = (color = '#767676') => {

    const contrastToWhite = contrastLevel( color, '#ffffff' )
    const contrastToBlack = contrastLevel( color, '#000000' )
    if( contrastToBlack >= 4.5 && contrastToWhite >= 4.5){
        return color
    } else {
        return false
    }
}
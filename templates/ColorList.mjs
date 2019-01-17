export default (colors) => {
    const heading = `<h1 style="--color: #${colors[0].hex}">${colors[0].name}</h1>`
    const list = colors.map( color => {
        return `<li id="x${color.hex}" style="--color:#${color.hex}">
            <b>#${color.hex}</b>
        </li>`
    })
return `${heading}<ol>${list.join('')}</ol>`
}
export default (colors) => {
    const list = colors.map( color => {
        return `<li style="--color:${color}">
            <a href="${color}.html">${color}</a>
        </li>`
    })
    return `<ul>${list.join('')}</ul>`
}

const getPieceImageUrl = (type, name) => {
    return new URL(`./assets/${type}/${name}.svg`, import.meta.url).href
}


export { getPieceImageUrl }
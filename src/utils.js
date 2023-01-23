
const getPieceImageUrl = (piece) => {
    return new URL(`./assets/${piece.type}/${piece.name}.svg`, import.meta.url).href
}


export { getPieceImageUrl }
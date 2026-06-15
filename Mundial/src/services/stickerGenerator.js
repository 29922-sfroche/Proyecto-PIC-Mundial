export const generatePack = (stickers, size = 5) => {
  const pack = []

  for (let index = 0; index < size; index += 1) {
    const random = Math.floor(Math.random() * stickers.length)
    pack.push(stickers[random])
  }

  return pack
}

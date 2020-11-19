const Jimp = require('jimp');

const hex = ["00", "33", "66", "99", "CC", "FF"]


function randomInRange(start,end){
  return Math.floor(Math.random() * (end - start + 1) + start);
}

const getRandomColor = () => {
  return `#${hex[randomInRange(0, 5)]}${hex[randomInRange(0, 5)]}${hex[randomInRange(0, 5)]}`
}

for (let red = 0; red < 6; red++) {
  for (let green = 0; green < 6; green++) {
    for (let blue = 2; blue < 6; blue++) {
      if (red == 5 && green == 5) continue
      const colorRoot = `#${hex[red]}${hex[green]}${hex[blue]}`;
      const minus1 = `#${hex[red]}${hex[green]}${hex[blue-1]}`;
      const minus2 = `#${hex[red]}${hex[green]}${hex[blue-2]}`;

      new Jimp(8, 1, function (err, image) {
        if (err) throw err;
        const colorArr = [
          Jimp.cssColorToHex(minus2),
          Jimp.cssColorToHex(minus1),
          Jimp.cssColorToHex(colorRoot),
          Jimp.cssColorToHex(getRandomColor()),
          Jimp.cssColorToHex(getRandomColor()),
          Jimp.cssColorToHex(getRandomColor()),
          Jimp.cssColorToHex('#FFFFFF'),
          Jimp.cssColorToHex('#000000')
        ]

        image.setPixelColor(colorArr[0], 0, 0)
        image.setPixelColor(colorArr[1], 1, 0)
        image.setPixelColor(colorArr[2], 2, 0)
        image.setPixelColor(colorArr[3], 3, 0)
        image.setPixelColor(colorArr[4], 4, 0)
        image.setPixelColor(colorArr[5], 5, 0)
        image.setPixelColor(colorArr[6], 6, 0)
        image.setPixelColor(colorArr[7], 7, 0)
      
        image.write(`color/${colorRoot}.png`, (err) => {
          if (err) throw err;
        });
      });
    }
  }
}
const Jimp = require('jimp');

const allowedValue = [0, 51, 102, 153, 204, 255]
const allowedRoot = []

let imageData = [
  [ 0xFF0000FF, 0xFF0000FF, 0xFF0000FF ],
  [ 0xFF0000FF, 0x00FF00FF, 0xFF0000FF ],
  [ 0xFF0000FF, 0xFF0000FF, 0x0000FFFF ]
];


let image = new Jimp(8, 1, function (err, image) {
  if (err) throw err;

  imageData.forEach((row, y) => {
    row.forEach((color, x) => {
      image.setPixelColor(color, x, y);
    });
  });

  image.write('test.png', (err) => {
    if (err) throw err;
  });
});
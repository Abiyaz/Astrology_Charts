const generateCoordinates = (xValue, yValue, size) => {
  const xy = [];
  let x = xValue;
  let y = yValue;
  for (let j = 1; j <= size; j++) {
    y -= .4
    xy.push({ x, y });
  }
  return xy
}

let h1coordinates = [
  ...generateCoordinates(7.5, 12, 8),
  ...generateCoordinates(6.5, 12, 8),
  ...generateCoordinates(5.5, 11, 5),
  ...generateCoordinates(8.5, 11, 5),
];

let h2coordinates = [
  ...generateCoordinates(3, 13, 5),
  ...generateCoordinates(3.5, 13, 5),
  ...generateCoordinates(4, 13, 5),
  ...generateCoordinates(4.5, 13, 5),
  ...generateCoordinates(2, 13, 3),
  ...generateCoordinates(5.5, 13, 3)
];
let h3coordinates = [
  ...generateCoordinates(1.2, 12.3, 11),
  ...generateCoordinates(1.7, 11.8, 9),
  ...generateCoordinates(2.3, 11.2, 6),
];
let h4coordinates = [
  ...generateCoordinates(4.5, 9, 8),
  ...generateCoordinates(3.5, 9, 8),
  ...generateCoordinates(2.5, 8, 5),
  ...generateCoordinates(5.5, 8, 5),
];
let h5coordinates = [
  ...generateCoordinates(1.2, 6.3, 11),
  ...generateCoordinates(1.7, 5.8, 9),
  ...generateCoordinates(2.3, 5.2, 6),
];
let h6coordinates = [
  ...generateCoordinates(3, 3, 5),
  ...generateCoordinates(3.5, 3, 5),
  ...generateCoordinates(4, 3, 5),
  ...generateCoordinates(4.5, 3, 5),
  ...generateCoordinates(2, 2, 3),
  ...generateCoordinates(5.5, 2, 3)
];
let h7coordinates = [
  ...generateCoordinates(6.5, 5.5, 8),
  ...generateCoordinates(7.5, 5.5, 8),
  ...generateCoordinates(5.5, 5, 5),
  ...generateCoordinates(8.5, 5, 5),
];
let h8coordinates = [
  ...generateCoordinates(9, 3, 5),
  ...generateCoordinates(9.5, 3, 5),
  ...generateCoordinates(10, 3, 5),
  ...generateCoordinates(10.5, 3, 5),
  ...generateCoordinates(8, 2, 3),
  ...generateCoordinates(11.5, 2, 3)
];
let h9coordinates = [
  ...generateCoordinates(12.5, 6, 10),
  ...generateCoordinates(12, 6, 10),
  ...generateCoordinates(11.4, 5.3, 6),
];
let h10coordinates = [
  ...generateCoordinates(9.5, 9, 8),
  ...generateCoordinates(10.5, 9, 8),
  ...generateCoordinates(8.5, 8, 5),
  ...generateCoordinates(11.5, 8, 5),
];
let h11coordinates = [
  ...generateCoordinates(12.5, 12, 10),
  ...generateCoordinates(12, 12, 10),
  ...generateCoordinates(11.4, 11.3, 6),
];
let h12coordinates = [
  ...generateCoordinates(9, 13, 5),
  ...generateCoordinates(9.5, 13, 5),
  ...generateCoordinates(10, 13, 5),
  ...generateCoordinates(10.5, 13, 5),
  ...generateCoordinates(8, 13, 3),
  ...generateCoordinates(11.5, 13, 3)
];

const coordinates = {
  1: h1coordinates,
  2: h2coordinates,
  3: h3coordinates,
  4: h4coordinates,
  5: h5coordinates,
  6: h6coordinates,
  7: h7coordinates,
  8: h8coordinates,
  9: h9coordinates,
  10: h10coordinates,
  11: h11coordinates,
  12: h12coordinates
}

export default coordinates;

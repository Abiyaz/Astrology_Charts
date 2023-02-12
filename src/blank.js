// let generatedNumbersX = [];
// let generatedNumbersY = [];

// function getRandomCoordinateHouse1ForX(min = 200, max = 300) {
//   let randomNumber;
//   do {
//     randomNumber = parseInt(Math.random() * (max - min) + min, 10);
//   } while (generatedNumbersX.includes(randomNumber));
//   generatedNumbersX.push(randomNumber);
//   return randomNumber;
// }

// console.log({ coordinates });

// const generatedCoordinates = [];

// function getRandomCoordinate(minX = 200, maxX = 300, minY = 100, maxY = 200) {
//   let x, y;
//   do {
//     x = parseInt(Math.random() * (maxX - minX) + minX, 10);
//     y = parseInt(Math.random() * (maxY - minY) + minY, 10);
//   } while (
//     generatedCoordinates.some(
//       (coordinate) => coordinate[0] === x && coordinate[1] === y
//     )
//   );
//   generatedCoordinates.push({ x: x, y: y });
//   return { x: x, y: y };
// }

// for (let i = 0; i < 12; i++) {
//   getRandomCoordinate();
//   console.log(generatedCoordinates);
// }

// console.log({ generatedNumbersX });
// console.log({ generatedNumbersY });

// function getRandomCoordinateHouse1ForY(min = 100, max = 200) {
//   let randomNumber;
//   do {
//     randomNumber = parseInt(Math.random() * (max - min) + min, 10);
//   } while (generatedNumbersY.includes(randomNumber));
//   generatedNumbersY.push(randomNumber);
//   return randomNumber;
// }

// console.log(generatedCoordinates);

// Draw the planets
// svg.selectAll(".planet")
//    .data([
//      {name: "Sun", x: 100, y: 100, r: 20, color: "yellow"},
//      {name: "Moon", x: 300, y: 300, r: 15, color: "white"},
//      // Add more planets here...
//    ])
//    .join("circle")
//      .attr("class", "planet")
//      .attr("cx", d => d.x)
//      .attr("cy", d => d.y)
//      .attr("r", d => d.r)
//      .style("fill", d => d.color);
// Draw the houses
// svg.selectAll(".house")
//    .data([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])
//    .join("rect")
//      .attr("class", "house")
//      .attr("x", (d, i) => i * 40)
//      .attr("y", 0)
//      .attr("width", 40)
//      .attr("height", 500)
//      .style("fill", "lightgray");

// Draw the horizontal grid lines
// svg
//   .selectAll(".horizontal-line")
//   .data(d3.range(0, 500, 50))
//   .join("line")
//   .attr("class", "horizontal-line")
//   .attr("x1", 0)
//   .attr("y1", (d) => d)
//   .attr("x2", 500)
//   .attr("y2", (d) => d)
//   .style("stroke", "black");

// var H1 = svg.append("text")
// .attr("x", 250)
// .attr("y", 150)
// .text("H1")
// .style("font-size", "12px")
// .style("text-anchor", "middle");

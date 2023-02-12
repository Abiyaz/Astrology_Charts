import React, { useEffect, useRef } from "react";
import * as d3 from "d3";
// import chartData from "./data";
import coordinates from "./houseCoordinates";
import ColorPicker from "./ColorPicker";

const ANIMATION_DURATION = 100;
const START_AXIS = 1;
const END_AXIS = 13;

const START = START_AXIS;
const END = END_AXIS;
const MIDDLE = 7;

const TICK_SIZE = END;
const AXIS_OPACITY = 0;

const margin = { top: 50, right: 50, bottom: 50, left: 50 };

const renderPlanetPlotter = (
  svg,
  planetPos,
  coordinateInfo,
  house,
  xScale,
  yScale,
  glyphColor
) => {
  const planets = planetPos.filter((d) => d.house === house);
  // const planets = Array.from({ length: 26 }, (_, i) => i + 1);

  svg
    .selectAll(`.planet-label-${house}`)
    .data(planets)
    .join("text")
    .attr("class", `planet-label-${house}`)
    .attr("x", (d, i) => xScale(coordinateInfo[i]?.x))
    .attr("y", (d, i) => yScale(coordinateInfo[i]?.y))
    .attr("fill", glyphColor)
    .attr("opacity", 0)
    .html((d, i) => {
      const text = `${d.planet[0] || ""}${d.planet[1] || ""}`;
      // return i + 1;
      return text;
    })
    .attr("font-size", "12px")
    .transition(ANIMATION_DURATION)
    .delay(ANIMATION_DURATION)
    .attr("opacity", 1);
};

const renderAxis = (svg, width, height) => {
  const x = d3.scaleLinear().domain([START_AXIS, END_AXIS]).range([0, width]);

  const y = d3.scaleLinear().domain([START_AXIS, END_AXIS]).range([height, 0]);

  const xAxis = d3.axisBottom(x).tickSize(-height).ticks(TICK_SIZE);

  const yAxis = d3.axisLeft(y).tickSize(-width).ticks(TICK_SIZE);

  // Create grids.
  const xAxisGrid = svg
    .selectAll(".x_axis_grid")
    .data([1])
    .join("g")
    .attr("class", "x_axis_grid")
    .attr("transform", "translate(0," + height + ")")
    .attr("opacity", AXIS_OPACITY)
    .call(xAxis);

  xAxisGrid.selectAll("line").attr("stroke", "gainsboro");
  // xAxisGrid.selectAll("text").attr("transform", "translate(0, -15)");

  const yAxisGrid = svg
    .selectAll(".y_axis_grid")
    .data([1])
    .join("g")
    .attr("class", "y_axis_grid")
    .attr("opacity", AXIS_OPACITY)
    .call(yAxis);

  yAxisGrid.selectAll("line").attr("stroke", "gainsboro");
  // yAxisGrid.selectAll("text").attr("transform", "translate(15, 0)");

  return { x, y };
};

const renderDiamondChart = (svg, xScale, yScale, chartColor) => {
  const linesGroup = svg
    .selectAll(".linesGroup")
    .data([1])
    .join("g")
    .attr("class", "linesGroup");

  const vline = d3
    .line()
    .x((d) => {
      return xScale(d[0]);
    })
    .y((d) => {
      return yScale(d[1]);
    });

  linesGroup
    .selectAll(".diamondChartPath")
    .data([
      [
        [START, START],
        [START, END],
        [END, END],
        [END, START],
        [START, START],
        [END, END],
        [START, END],
        [END, START],
        [END, MIDDLE],
        [MIDDLE, END],
        [START, MIDDLE],
        [MIDDLE, START],
        [END, MIDDLE],
      ],
    ])
    .join("path")
    .attr("class", "diamondChartPath")
    .attr("fill", "none")
    .attr("stroke-linejoin", "round")
    .attr("stroke", chartColor)
    .attr("stroke-width", "2")
    .attr("d", vline)
    // .call(chartTransition);

  const chartBodyGap = 1;
  linesGroup
    .selectAll(".diamondChartBody")
    .data([
      [
        [START - chartBodyGap, START - chartBodyGap],
        [START - chartBodyGap, END + chartBodyGap],
        [END + chartBodyGap, END + chartBodyGap],
        [END + chartBodyGap, START - chartBodyGap],
        [START - chartBodyGap, START - chartBodyGap],
      ],
    ])
    .join("path")
    .attr("class", "diamondChartBody")
    .attr("fill", "none")
    .attr("stroke-linejoin", "round")
    .attr("stroke", chartColor)
    .attr("stroke-width", "2")
    .attr("d", vline)
    // .call(chartTransition);
};

const renderSigns = (svg, ascendant, xScale, yScale) => {
  const SIGNS = [
    { label: "Ar", id: 1, value: "Aries" },
    { label: "Ta", id: 2, value: "Taurus" },
    { label: "Ge", id: 3, value: "Gemini" },
    { label: "Ca", id: 4, value: "Cancer" },
    { label: "Le", id: 5, value: "Leo" },
    { label: "Vi", id: 6, value: "Virgo" },
    { label: "Li", id: 7, value: "Libra" },
    { label: "Sc", id: 8, value: "Scorpio" },
    { label: "Sa", id: 9, value: "Saggitarius" },
    { label: "Ca", id: 10, value: "Capricorn" },
    { label: "Aq", id: 11, value: "Aquarius" },
    { label: "Pi", id: 12, value: "Piesces" },
  ];

  const signsCoordinate = [
    { x: MIDDLE, y: MIDDLE + 0.5 },
    { x: 4, y: 10.5 },
    { x: 3.5, y: 10 },
    { x: 6.5, y: 7 },
    { x: 3.5, y: 4 },
    { x: 4, y: 3.5 },
    { x: 7, y: 6.5 },
    { x: 10, y: 3.5 },
    { x: 10.5, y: 4 },
    { x: 7.5, y: 7 },
    { x: 10.5, y: 10 },
    { x: 10, y: 10.5 },
  ];

  const rotateArray = (array, n) => {
    for (let i = 0; i < n; i++) {
      array.unshift(array.pop());
    }
    return array;
  };

  const rotatedSigns = rotateArray(
    SIGNS,
    parseInt(ascendant[0]?.ascendant?.split("-")[0] - 1, 10)
  );

  const signs = signsCoordinate.map((d, i) => {
    return { ...d, ...rotatedSigns[i] };
  });

  svg
    .selectAll(".sign")
    .data(signs)
    .join("text")
    .attr("class", "sign")
    .attr("x", (d) => xScale(d.x))
    .attr("y", (d) => yScale(d.y))
    .attr("text-anchor", "middle")
    .attr("dominant-baseline", "middle")
    .attr("fill", "maroon") //sign color
    .attr("font-size", "0px")
    .attr("font-weight", "bold")
    .text((d) => d.id)
    .attr("opacity", 0)
    .transition(ANIMATION_DURATION)
    .delay(ANIMATION_DURATION)
    .attr("opacity", 1)
    .attr("font-size", "16px");
};

const renderHouseLabel = (svg, xScale, yScale) => {
  const houses = [
    { x: 7, y: 8, label: "1", id: 1 },
    { x: 4, y: 11, label: "2", id: 2 },
    { x: 3, y: 10, label: "3", id: 3 },
    { x: 6, y: 7, label: "4", id: 4 },
    { x: 3, y: 4, label: "5", id: 5 },
    { x: 4, y: 3, label: "6", id: 6 },
    { x: 7, y: 6, label: "7", id: 7 },
    { x: 10, y: 3, label: "8", id: 8 },
    { x: 11, y: 4, label: "9", id: 9 },
    { x: 8, y: 7, label: "10", id: 10 },
    { x: 11, y: 10, label: "11", id: 11 },
    { x: 10, y: 11, label: "12", id: 12 },
  ];

  svg
    .selectAll(".house-label")
    .data(houses)
    .join("text")
    .attr("class", "house-label")
    .attr("x", (d) => xScale(d.x))
    .attr("y", (d) => yScale(d.y))
    .attr("text-anchor", "middle")
    .attr("dominant-baseline", "middle")
    .attr("opacity", 0)
    .attr("fill", "gray")
    .attr("font-size", "16px")
    .text((d) => d.label)
    .transition(ANIMATION_DURATION)
    .delay(ANIMATION_DURATION)
    .attr("opacity", 1);
};

const renderChart = (svg, width, height, glyphColor, chartColor,chartData) => {
  const mySvg = svg
    .selectAll(".mainBody")
    .data([1])
    .join("g")
    .attr("class", "mainBody")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  const { x: xScale, y: yScale } = renderAxis(mySvg, width, height);

  const points = chartData;

  const { planets, ascendant } = points;
  // console.log(planets);

  let planetPos = planets.map((d, i) => {
    for (const key in d) {
      return {
        planet: key,
        house: parseInt(d[key].split("-"), 10),
      };
    }
  });

  renderDiamondChart(mySvg, xScale, yScale, chartColor);
  renderSigns(mySvg, ascendant, xScale, yScale, glyphColor);
  // renderHouseLabel(mySvg, xScale, yScale);
  for (let i = 1; i <= 12; i++) {
    renderPlanetPlotter(
      mySvg,
      planetPos,
      coordinates[i],
      i,
      xScale,
      yScale,
      glyphColor
    );
  }
};

function chartTransition(path) {
  path
    .transition()
    .duration(ANIMATION_DURATION)
    .attrTween("stroke-dasharray", tweenDash);
}

function tweenDash() {
  const l = this.getTotalLength(),
    i = d3.interpolateString("0," + l, l + "," + l);
  return (t) => i(t);
}

const Chart = ({ glyphColor, chartColor, chartData }) => {
  const chartRef = useRef();
  const scaler = 1;
  const width = 500 - margin.left - margin.right;
  const height = 500 - margin.top - margin.bottom;

  useEffect(() => {
    const svg = d3
      .select(chartRef.current)
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .attr("transform", `scale(${scaler})`);

    renderChart(svg, width, height, glyphColor, chartColor, chartData);
  }, [chartColor, glyphColor,chartData]);

  // Render the SVG code as HTML
  return (
    <div
    // style={{
    //   display: "flex",
    //   justifyContent: "center",
    //   // alignContent: "center",
    //   alignItems: "center",
    //   margin: "auto",
    // }}
    >
      <svg ref={chartRef}></svg>
    </div>
  );
};

export default Chart;

// THIS IS TYPICAL CONVENTION OF SETTING MARGINS IN D3

const margin = { top: 10, right: 10, bottom: 20, left: 30 };
const width = 425 - margin.left - margin.right;
const height = 600 - margin.top - margin.bottom;

const svg = d3.select('.chart')
  .append('svg')
  .attr('width', width + margin.left + margin.right)
  .attr('height', height + margin.top + margin.bottom)
  .append('g')
  .attr('transform', `translate(${margin.left}, ${margin.top})`);


svg.append('rect')
  .attr('width', width)
  .attr('height', height)
  .style('fill', 'lightgreen')
  .style('stroke', 'red');

const yScale = d3.scaleLinear()
  .domain([0, 100])
  .range([height, 0]);

// axis automaticly creates proper axis from bottom to top
const yAxis = d3.axisLeft(yScale)
  // .ticks(8); //ticks do not guarantee number of ticks presented !!!!
  .tickValues([20, 40, 60, 80])
  .tickSize(0)


const  xScale = d3.scaleTime()
  .domain([new Date(2017, 0, 1), new Date(2017, 1, 1)])
  .range([0, width]);

const xAxis = d3.axisBottom(xScale).ticks(5);

svg.call(yAxis);

svg.append('g')
  .attr('transform', `translate(0, ${height})`)
  .call(xAxis);



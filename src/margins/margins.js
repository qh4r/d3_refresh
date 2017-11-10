// THIS IS TYPICAL CONVENTION OF SETTING MARGINS IN D3

const margin = { top: 10, right: 10, bottom: 20, left: 30 };
const width = 425 - margin.left - margin.right;
const height = 600 - margin.top - margin.bottom;

const fullWidth = width + margin.left + margin.right;
const fullHeight = height + margin.top + margin.bottom;

const svg = d3.select('.chart')
  .append('svg')
  .attr('width', width + margin.left + margin.right)
  .attr('height', height + margin.top + margin.bottom)
  .call(responsivefy)
  // .attr('viewBox', `0 0 ${fullWidth} ${fullHeight}`) // view box allow you to control which part of svg will be visible
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
const yAxis = d3.axisLeft(yScale).style('fill', 'cyan')
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


function responsivefy(svg) {
  // get container + svg aspect ratio
  var container = d3.select(svg.node().parentNode),
    width = parseInt(svg.style("width")),
    height = parseInt(svg.style("height")),
    aspect = width / height;

  // add viewBox and preserveAspectRatio properties,
  // and call resize so that svg resizes on inital page load
  svg.attr("viewBox", "0 0 " + width + " " + height)
    .attr("preserveAspectRatio", "xMinYMid")
    .call(resize);

  // to register multiple listeners for same event type,
  // you need to add namespace, i.e., 'click.foo'
  // necessary if you call invoke this function for multiple svgs
  // api docs: https://github.com/mbostock/d3/wiki/Selections#on
  d3.select(window).on("resize." + container.attr("id"), resize);

  // get width of container and resize svg to fit it
  function resize() {
    var targetWidth = parseInt(container.style("width"));
    svg.attr("width", targetWidth);
    svg.attr("height", Math.round(targetWidth / aspect));
  }
}

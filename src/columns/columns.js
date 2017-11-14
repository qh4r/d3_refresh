const genresData = [
  { likes: 78, genre: "RPG" },
  { likes: 62, genre: "Action" },
  { likes: 47, genre: "Adventure" },
  { likes: 88, genre: "Sports" },
  { likes: 81, genre: "Shooter" },
  { likes: 53, genre: "Platformer" },
];

const margin = { top: 10, right: 10, bottom: 50, left: 30 };
const width = 425 - margin.left - margin.right;
const height = 600 - margin.top - margin.bottom;

const svg = d3.select('.chart')
  .append('svg')
  .attr('width', width + margin.left + margin.right)
  .attr('height', height + margin.top + margin.bottom)
  .call(responsivefy)
  .append('g')
  .attr('transform', `translate(${margin.left}, ${margin.top})`);

const yScale = d3.scaleLinear()
  .domain([0, 100])
  .range([height, 0]);

const yAxis = d3.axisLeft(yScale)
  .tickValues([20, 40, 60, 80])
  .tickSize(0);


const xScale = d3.scaleBand() //maps to text to given value ranges smartly
  .domain(genresData.map(d => d.genre))
  .range([0, width])
  .padding(0.2); // padding works for whole bars IT IS SCALEBAND SPECYFIC
// padding goes from 0 to 1 ~ 1 is whole bandwidth


const xAxis = d3.axisBottom(xScale).ticks(5);

svg.call(yAxis);

svg.append('g')
  .attr('transform', `translate(0, ${height})`)
  .call(xAxis)
// decorating labels
  .selectAll('text')
  .style('text-anchor', 'start')
  // .style('transform', 'rotate(45deg)')
  .attr('transform', 'rotate(45)'); // using svg - upper is using css

// end + - 45deg also works

svg.selectAll('rect')
  .data(genresData)
  .enter()
  .append('rect')
  .attr('x', d => xScale(d.genre))
  .attr('y', d => yScale(d.likes))
  .attr('width', d => xScale.bandwidth()) // special property of scaleBand
  .attr('height', d => height - yScale(d.likes)) //bars are drawn from top to bottom
  // .style('fill', '#00AAAA');
  // for hover and such it's best to use css styles
function responsivefy(svg) {
  const container = d3.select(svg.node().parentNode),
    width = parseInt(svg.style("width")),
    height = parseInt(svg.style("height")),
    aspect = width / height;
  svg.attr("viewBox", "0 0 " + width + " " + height)
    .attr("preserveAspectRatio", "xMinYMid")
    .call(resize);
  d3.select(window).on("resize." + container.attr("id"), resize);
  function resize() {
    const targetWidth = parseInt(container.style("width"));
    svg.attr("width", targetWidth);
    svg.attr("height", Math.round(targetWidth / aspect));
  }
}

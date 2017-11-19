const genresData = [
  { likes: 78, soldCopies: 7983, genre: "RPG" },
  { likes: 62, soldCopies: 9075, genre: "Action" },
  { likes: 47, soldCopies: 4063, genre: "Adventure" },
  { likes: 88, soldCopies: 5091, genre: "Sports" },
  { likes: 53, soldCopies: null, genre: "Platformer" },
  { likes: 81, soldCopies: 4452, genre: "Shooter" },
];

const margin = { top: 10, right: 10, bottom: 50, left: 50 };
const width = 425 - margin.left - margin.right;
const height = 560 - margin.top - margin.bottom;

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

const xScale = d3.scaleBand()
  .domain(genresData.map(d => d.genre))
  .range([0, width])
  .padding(0.2);

const xAxis = d3.axisBottom(xScale).ticks(5);

const yAxisFunc = d3.axisLeft(yScale).tickSize(0);

const yAxis = svg
  .append('g')
  .call(yAxisFunc);


svg.append('g')
  .attr('transform', `translate(0, ${height})`)
  .call(xAxis)
  .selectAll('text')
  .style('text-anchor', 'start')
  .attr('transform', 'rotate(45)');

function render(subject = 'likes') {
  const t = d3.transition().duration(1000);

  const update = svg.selectAll('rect')
  // .data(genresData.map(d => Object.assign(d, {[subject]: d[subject] || 0}))); // remove null values
    .data(genresData.filter(d => d[subject]), d => d.genre); // remove null values SECOND ARGUMENT MAKES D3 BIND DATA TO NAMES
  // without name it would consider data to be shorter array if there were values filtered out

  // ANIMATION SCALES
  yScale
    .domain([0, d3.max(genresData, d => d[subject])])
  // .range([height, 0]);

  yAxis
    .transition(t)
    .delay(1000)
    .call(yAxisFunc);

  update
    .exit()
    .transition(t)
    .attr('y', height) // need this to animate from top to bottom instead of bottom to top
    .attr('height', 0)
    .remove();

  update
    .transition(t)
    .delay(1000)
    .attr('y', d => yScale(d[subject]))
    .attr('height', d => height - yScale(d[subject]));

  // update.merge(enter) // this (following) applies to both ENTER and UPDATE selection

  update
    .enter()
    .append('rect')
    .attr('y', height)
    .attr('height', 0) // INITIAL VALUES for animation to happen on enter
    .attr('x', d => xScale(d.genre))
    .attr('width', d => xScale.bandwidth())
    .transition(t)
    .delay(1000)
    .attr('y', d => yScale(d[subject]))
    .attr('height', d => height - yScale(d[subject]));

  console.log(subject);
}

render();
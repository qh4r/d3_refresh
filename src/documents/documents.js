const data = [
  { name: "Rafał", age: 23 },
  { name: "Asia", age: 18 },
  { name: "Rudolf", age: 60 },
  { name: "Patryk", age: 33 },
  { name: "Emma", age: 27 },
];


// UPDATE SELECTION - items that already are on page and HAVE DATA
const update = d3.select('.chart-1')
  .selectAll('div')
  // .data(data)
  // calback is optional it will prevent elements that already exist on start from updating if not needed
  // in our case Rudolf stays intact (and Marian is just there)
  .data(data, function (d) {
    return d ? d.name : this.innerText;
  })
  // this will only affect elements that appear in both initial nodes AND given DATA - in our case Rudolf
  .style('font-weight', 700);

// ENTER SELECTION - items that are not on page but have data
const enter = update
  .enter() // this all will happen on  initial enter
  // we append div FOR EACH data element
  .append('div')
  .text((d) => {
    return d.name;
  })
  // we no operate on individual items
  .style('color', 'olive');

// EXIT SELECTION - items that already are displayed but no longer have data
update.exit().remove() //this will remove Marian


const ageScale = d3.scaleLinear()
  .domain([0, 100])
  .range([40, 250]);

// combined enter and update
update.merge(enter)
  .style('line-height', '50px')
  .style('margin', '5px')
  .style('background', 'crimson')
  .style('width', d => ageScale(d.age) + 'px');

// svg

// g is a graphic element used as container

d3.select('.chart-2')
  .append('svg')
  .attr("width", '100%')
  .attr("height", '300px')
  .selectAll('rect')
  .data(data)
  .enter()
  .append('rect')
  .attr('y', (d, i) => i * 55)
  .style('width', d => `${ageScale(d.age)}`) // svg does not require px
  .classed('bar-style', true);

const bars3 = d3.select('.chart-3')
  .append('svg')
  .attr("width", '100%')
  .attr("height", '300px')
  .selectAll('g')
  .data(data)
  .enter()
  .append('g')
  .attr('transform', (d, i) => `translate(0, ${i * 55})`);
// g need transform translate(x,y) instead of x y

bars3
  .append('rect')
  .style('width', d => `${ageScale(d.age)}`) // svg does not require px
  .classed('bar-style', true);

bars3
  .append('text') // text is positioned at its bottom so y 30 will make its bottom 30px from g's top
  .text(d => d.name)
  .attr('y', '30')
  .attr('x', '5');
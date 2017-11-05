// d3 select allows you to select single item
const link = d3.select('.header a');
// d3 select all allows the same for all instances  ~~ both work like querySelector and querySelectorAll
const allLinks = d3.selectAll('.header a');
// can call select / selectAll on result of those calls
const secondLink = d3.select('.header').select('a:nth-child(2)');

console.log(link.nodes(), allLinks.nodes(), secondLink.nodes());

// attr method allows to set attrs on elements ~ like jquery
secondLink
  .attr('href', '/')
  .style('text-decoration', 'none') // can also chain and access node styles
  .classed('added-class', true) // can toggle classes
  .text('Modified animal'); //can also use html instead of text to append html
//also can use to get ~~ like jquery
console.log(secondLink.attr('href'));

// addin 4th link
d3.select('.header')
  .append('a') // append changes selection to what append returns
  .text('a new kind of Animal')
  .attr('href', '/')
  .style('color', 'green');

// 5th as 1st
d3.select('.header')
  .insert('a', 'a:first-child') // insert accepts 2nd argument that causes to append BEFORE it's result (w/o it it would append to the end)
  .text('this was also added')
  .attr('href', '#')
  .style('color', 'blue')
  .style('text-decoration', 'none');

// removes 1 link
setTimeout(function(){
  d3.select('.action').remove();
}, 3000);

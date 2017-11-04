// scale maps input to poutpu values lineary (so that we can map input data to our required heights for example
const linearScale = d3.scaleLinear()
  .domain([0, 100])
  .range([0, 30])
  // normally values aout of a range would also get mapped relativly, clamp causes max and min values to be HARD CAPS
  .clamp(true);


console.log(linearScale(50)); // 15
console.log(linearScale(100)); // 30
console.log(linearScale(105)); // 31.5 // with clamp : 30


// maps dates to relative values
const timeScale = d3.scaleTime()
  .domain([new Date(2017, 0, 1), new Date()])
  .range([0, 100]);

const date = new Date(2017, 4, 12);
console.log(date, timeScale(date));

// invert method works for all scales and allows us to sort of map from output range to input range
console.log(timeScale.invert(50)); // will print date half way through set


// maps to ranges
const quantizeScale = d3.scaleQuantize()
  .domain([0,100])
  .range(["r", "g", "b"]);

console.log(3, quantizeScale(3)); //r
console.log(90, quantizeScale(90)); //b
console.log(34, quantizeScale(34)); //g

console.log(quantizeScale.invertExtent("r")) // returns range that r falls into


// maps specyfic value to specyfic output
const ordinalScale = d3.scaleOrdinal()
  .domain('cat', 'mouse', 'fish')
  .range(['red', 'blue', 'white']);

console.log(ordinalScale('cat')); // red

// to get min/max from data set use d3.min/ d3.max ~~ d3.min(data, cb(data): valueToCompare)
// to get array of both (like from invertExtent use d3.extent ~~ will return [min, max]

// d3.set return unique value from given set
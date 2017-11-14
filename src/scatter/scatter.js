const data = [
  {
    "country": "United States",
    "population": 323050000,
    "expectancy": 78.94,
    "cost": 9024.21,
    "code": "US",
  },
  {
    "country": "Switzerland",
    "population": 8306200,
    "expectancy": 82.85,
    "cost": 6786.57,
    "code": "CH",
  },
  {
    "country": "Norway",
    "population": 5213985,
    "expectancy": 81.75,
    "cost": 6081,
    "code": "NO",
  },
  {
    "country": "Netherlands",
    "population": 16998003,
    "expectancy": 81.3,
    "cost": 5276.6,
    "code": "NL",
  },
  {
    "country": "Germany",
    "population": 81459000,
    "expectancy": 80.84,
    "cost": 5119.21,
    "code": "DE",
  },
  {
    "country": "Sweden",
    "population": 9858794,
    "expectancy": 81.96,
    "cost": 5065.16,
    "code": "SE",
  },
  {
    "country": "Ireland",
    "population": 4635400,
    "expectancy": 81.15,
    "cost": 5001.32,
    "code": "IE",
  },
  {
    "country": "Austria",
    "population": 8699730,
    "expectancy": 81.34,
    "cost": 4896,
    "code": "AT",
  },
  {
    "country": "Denmark",
    "population": 5707251,
    "expectancy": 80.55,
    "cost": 4857.03,
    "code": "DK",
  },
  {
    "country": "Belgium",
    "population": 11306030,
    "expectancy": 80.59,
    "cost": 4522.04,
    "code": "BE",
  },
  {
    "country": "Canada",
    "population": 35985751,
    "expectancy": 81.96,
    "cost": 4495.69,
    "code": "CA",
  },
  {
    "country": "Luxembourg",
    "population": 562,
    "expectancy": 82.21,
    "cost": 4478.97,
    "code": "LU",
  },
  {
    "country": "France",
    "population": 64513242,
    "expectancy": 82.37,
    "cost": 4366.99,
    "code": "FR",
  },
  {
    "country": "Australia",
    "population": 24026900,
    "expectancy": 82.25,
    "cost": 4206.85,
    "code": "AU",
  },
  {
    "country": "Japan",
    "population": 126810000,
    "expectancy": 83.59,
    "cost": 4152.37,
    "code": "JP",
  },
  {
    "country": "United Kingdom",
    "population": 65097000,
    "expectancy": 81.06,
    "cost": 3971.39,
    "code": "UK",
  },
  {
    "country": "Iceland",
    "population": 332,
    "expectancy": 82.06,
    "cost": 3896.93,
    "code": "IS",
  },
  {
    "country": "Finland",
    "population": 5490750,
    "expectancy": 81.13,
    "cost": 3871.39,
    "code": "FI",
  },
  {
    "country": "New Zealand",
    "population": 4671020,
    "expectancy": 81.4,
    "cost": 3537.26,
    "code": "NZ",
  },
  {
    "country": "Italy",
    "population": 60676361,
    "expectancy": 82.69,
    "cost": 3206.83,
    "code": "IT",
  },
  {
    "country": "Spain",
    "population": 46423064,
    "expectancy": 83.08,
    "cost": 3053.07,
    "code": "ES",
  },
  {
    "country": "Slovenia",
    "population": 2069982,
    "expectancy": 80.52,
    "cost": 2598.91,
    "code": "SI",
  },
  {
    "country": "Portugal",
    "population": 10374822,
    "expectancy": 80.72,
    "cost": 2583.84,
    "code": "PT",
  },
  {
    "country": "Israel",
    "population": 8476600,
    "expectancy": 82.15,
    "cost": 2547.4,
    "code": "IL",
  },
  {
    "country": "Czech Republic",
    "population": 10546120,
    "expectancy": 78.28,
    "cost": 2386.34,
    "code": "CZ",
  },
  {
    "country": "South Korea",
    "population": 51555409,
    "expectancy": 82.16,
    "cost": 2361.44,
    "code": "KR",
  },
  {
    "country": "Greece",
    "population": 10846979,
    "expectancy": 81.29,
    "cost": 2220.11,
    "code": "GR",
  },
  {
    "country": "Slovakia",
    "population": 5424058,
    "expectancy": 76.71,
    "cost": 1970.52,
    "code": "SK",
  },
  {
    "country": "Hungary",
    "population": 9849000,
    "expectancy": 75.87,
    "cost": 1796.6,
    "code": "HU",
  },
  {
    "country": "Estonia",
    "population": 1311759,
    "expectancy": 77.24,
    "cost": 1724.51,
    "code": "EE",
  },
  {
    "country": "Lithuania",
    "population": 2881705,
    "expectancy": 73.97,
    "cost": 1720.84,
    "code": "LT",
  },
  {
    "country": "Chile",
    "population": 18191900,
    "expectancy": 81.5,
    "cost": 1688.52,
    "code": "CL",
  },
  {
    "country": "Poland",
    "population": 38484000,
    "expectancy": 77.25,
    "cost": 1624.87,
    "code": "PL",
  },
  {
    "country": "Costa Rica",
    "population": 4832234,
    "expectancy": 79.4,
    "cost": 1393.95,
    "code": "CR",
  },
  {
    "country": "Russia",
    "population": 146544710,
    "expectancy": 70.37,
    "cost": 1368.75,
    "code": "RU",
  },
  {
    "country": "Latvia",
    "population": 1968600,
    "expectancy": 74.19,
    "cost": 1295.01,
    "code": "LV",
  },
  {
    "country": "South Africa",
    "population": 54956900,
    "expectancy": 57.18,
    "cost": 1146.47,
    "code": "ZA",
  },
  {
    "country": "Mexico",
    "population": 122273500,
    "expectancy": 76.72,
    "cost": 1052.66,
    "code": "MX",
  },
  {
    "country": "Turkey",
    "population": 78741053,
    "expectancy": 75.16,
    "cost": 990.19,
    "code": "TR",
  },
  {
    "country": "Colombia",
    "population": 48570200,
    "expectancy": 73.99,
    "cost": 964.5,
    "code": "CO",
  },
  {
    "country": "China",
    "population": 1375410000,
    "expectancy": 75.78,
    "cost": 730.52,
    "code": "CN",
  },
  {
    "country": "Indonesia",
    "population": 258705000,
    "expectancy": 68.89,
    "cost": 302.12,
    "code": "ID",
  },
  {
    "country": "India",
    "population": 1285930000,
    "expectancy": 68.01,
    "cost": 267.41,
    "code": "IN",
  },
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
  .domain(d3.extent(data, d => d.expectancy))
  .range([height, 0])
  .nice();

const xScale = d3.scaleLinear()
  .domain(d3.extent(data, d => d.cost))
  .range([0, width])
  .nice();

const yAxis = d3.axisLeft(yScale);
svg.call(yAxis);

const xAxis = d3.axisBottom(xScale);

svg.append('g')
  .attr('transform', `translate(0, ${height})`)
  .call(xAxis);

const rScale = d3.scaleSqrt()
  .domain([0, d3.max(data, d => d.population)])
  .range([0, 50]);

const circles = svg.selectAll('circle')
  .data(data)
  .enter()
  .append('g')
  .attr('class', 'circle')
  .attr('transform', d => {
    return `translate(${xScale(d.cost)}, ${yScale(d.expectancy)})`;
  });

circles
  .append('circle')
  .attr('cx', d => 0) // center x / center y
  .attr('cy', d => 0)
  .attr('r', d => rScale(d.population))
  .style('fill', '#33CC88')
  .style('fill-opacity', 0.5);

circles
  .append('text')
  .style('text-anchor', 'middle')
  .style('fill', 'black')
  .attr('y', 5)
  .text(d => d.country);

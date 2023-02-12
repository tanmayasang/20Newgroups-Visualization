//refrence:https://www.d3-graph-gallery.com/graph/barplot_basic.html

function plot_top_words(div_id, data){
    

// set the dimensions and margins of the graph
    const margin = {top: 30, right: 30, bottom: 70, left: 60},
    width = 460 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;

// append the svg object to the body of the page
   const svg = d3.select(div_id)
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", `translate(${margin.left},${margin.top})`);


// X axis
   const x = d3.scaleBand()
  .range([ 0, width ])
  .domain(data.map(d => d.topic))
  .padding(0.2);
  svg.append("g")
  .attr("transform", `translate(0, ${height})`)
  .call(d3.axisBottom(x))
  .selectAll("text")
  .attr("transform", "translate(-10,0)rotate(-45)")
  .style("text-anchor", "end");

// Add Y axis
const yValue = d => d.country;
const y = d3.scaleLinear()
  .domain([0, d3.max(data,d => d.frequency)])
  .range([ height, 0]);
svg.append("g")
  .call(d3.axisLeft(y));

// Bars
svg.selectAll("mybar")
  .data(data)
  .join("rect")
    .attr("x", d => x(d.topic))
    .attr("y", d => y(d.frequency))
    .attr("width", x.bandwidth())
    .attr("height", d => height - y(d.frequency))
    .attr("fill", "#69b3a2")
    
    
   
}


function topics_label(div_id,data){
    var dropdownButton = d3.select(div_id)
      
      .selectAll('myOptions') // Next 4 lines add 6 options = 6 colors
      .data(data)
      .enter()
      .append('option')
      .text(function (d) { return d; }) // text showed in the menu
      .attr("value", function (d) { return d; }) // corresponding value returned by the button
    
    }

var data;	

function initData() {	
  d3.tsv("34540-0001-Data.tsv", function(error, d) {
    if (error) throw error;
    console.log("asdfasdfasd");
    data = d;
  });
}

// returns drawing element, x/y scalers for drawing
function getContext(eName, data, zeroY, width, height, xName, yName, xLabel, yLabel) {
	
  // mw scale, collapse, select, invert, widen data
  // collapse == rollup
  // select == nest
  // scale
  // invert
  // widen

  var pointArr = [];
  
  function xAcc(d, i) { v = d.value[xName]; pointArr.push(v); return +v;  } // wo scaling
  function yAcc(d, i) { return +d.value[yName]; }

  xmin = d3.min(data, xAcc);  
  pointArr = []; // throw away dupe
  xmax = d3.max(data, xAcc);  
  ymin = d3.min(data, yAcc);  
  ymax = d3.max(data, yAcc);

  pALen = pointArr.length;
  
  //var x = d3.scaleLinear().domain([xmin,xmax]).range([0, width]);
  var x = d3.scalePoint().domain(pointArr).range([0, width]);
  if (zeroY) 
    var y = d3.scaleLinear().domain([ymax,0]).range([0, height]);
  else
    var y = d3.scaleLinear().domain([ymax,ymin]).range([0, height]);
    
  /*
  var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom")
    .ticks(5);
    //.tickFormat(d3.time.format("%Y"));

  var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left")
    .ticks(10);
	*/
  // var xAxis = d3.axisBottom(x);
  var xAxis = d3.axisBottom(x);//.ticks(d3.timeYear.every(1));
  var yAxis = d3.axisLeft(y);
  
  var xs = d3.scaleLinear().domain([xmin,xmax]).range([0, width]);
  if (zeroY) 
    var ys = d3.scaleLinear().domain([ymax,0]).range([0, height]);
  else
    var ys = d3.scaleLinear().domain([ymax,ymin]).range([0, height]);
	  
  // data scaled relative to svg size
  function xScaledAcc(d, i) { 
    return xs(+d.value[xName]); 
  }
  function yScaledAcc(d, i) { return ys(+d.value[yName]); }

  // set element size
  var svg = d3.select(eName);
  svg.attr("width", width)
     .attr("height", height);
	 
  svg.append("g") // xaxis
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis)
      .append("text")
		.attr("font-weight", "bold")
		.attr("text-anchor", "middle")
		.attr("y", 40)
		.attr("x", width / 2)
        .text(xLabel);	
		
  svg.append("g") // yaxis
     .attr("class", "y axis")
	  //.attr("transform", "translate(10," + 0 + ")")
      .call(yAxis)
      .append("text")
		.attr("font-weight", "bold")
		.attr("text-anchor", "middle")
		.attr("transform", "rotate(-90)").attr("y", -60).attr("x", -height / 2)
        .text(yLabel);

  xTextOff = -(width/pALen + 2);		
  svg.selectAll(".x .tick text").attr("transform", "translate(" +xTextOff+ ",10)rotate(-45)");
  
  return({e:svg, d:data, xsa:xScaledAcc, ysa:yScaledAcc});
}

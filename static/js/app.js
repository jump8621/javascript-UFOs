// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody")
var button = d3.select("#filter-btn");
var form = d3.select("#form2");
//var form2 = d3.select("#state-id")
//state filter button and input field
/*var sfilter = document.createElement("Input");
sfilter.setAttribute("type", "text")
document.getElementById("filters").appendChild(sfilter);
//document.getElementById("filters").size = "113"; -not working 
var btn = document.createElement("button");
btn.innerHTML = "Filter by State";
document.getElementById("filters").appendChild(btn);*/

var dropdownButton = d3.select("#Sdropdown").append('select')

let li = document.createElement('li');
li.innerHTML = '<label for="State">Enter a State ID</label>';
li.innerHTML = '<input type="text" class="form-control" id="state-id" placeholder="nc"></input>'
const filters = document.querySelector('#filters');
filters.appendChild(li);

//document.addEventListener("click", () => {
  //  document.getElementById("filters").innerHTML = "Filter by State";
  //});
  // var inputText = d3.event.target.value;

var pop_table = (data_input) => {
  data_input.forEach((ufoSighting) => {
    var row = tbody.append("tr");
    Object.entries(ufoSighting).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
}

pop_table(tableData)

button.on("change", runEnter)
form.on("change", runEnter);
dropdownButton.on("change", runEnter);
//form2.on("change", runEnter)
//what about clicking for the others
var option = d3.select("select")

data.forEach((ufoSighting) => {
  var list = option.append("option");
  Object.entries(ufoSighting.shape).forEach(([key, value]) => {
    var cell = list.append("value");
    cell.text(value);
  });
});

//dropdownButton.selectAll('option').data(Object.entries(ufoSighting.shape)).enter().append('value').text(ufoSighting.map((tableData) => {return tableData.shape}).attr("value", ufoSighting.map((tableData) => {return tableData.shape;}));

// dropdownButton.selectAll(data['shape']).data(shapes).enter().append('option').text((d) => {
//   return d;
// }).attr("shape", function(runShape) { return d});

//var shapes = ["circle", "sphere", "triangle", "light", "unknown", "fireball", "oval", "formation", "disk", "chevron", "rectangle", "cross", "flash", "changing", "cigar", "teardrop", "cylinder", "other", ]
//console.log(shapes)
//console.log(tableData['shape'])

function runEnter() {
  // Prevent the page from refreshing
  d3.event.preventDefault();
  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");
  var inputValue = inputElement.property("value").trim();

  var inputelements = d3.select("#state-id")
  var inputstate = inputelements.property("value").toLowerCase().trim();
  //var input = d3.select("circle")
  //var inputshape = input.property("value");
  //var filteredshape = tableData.filter(event => event.shape === inputshape);
  // var inputElement = d3.select("Input");
  // var inputElement = d3.event.target.value
  // var inputValue = inputElement.property("value")
  var filteredstate = tableData.filter(event => event.state === inputstate);
  console.log(filteredstate)
  var filteredData = tableData.filter(event => event.datetime === inputValue);
  console.log(filteredData)

  var inputElement3 = d3.select("Sdropdown");
  var inputValue3 = inputElement3.property("value");
  var filteredShapes = tableData.filter(event => event.shapes === inputValue3)

  //var filterstdata = tableData.filter(filteredData === filteredstate)
  var dataTable = d3.selectAll("tbody>tr")
  dataTable.html("")
  //tbody.selectAll("tr").remove();



  let response = { 
    filteredData, filteredstate, filteredShapes
  }
    if (response.filteredData.length !==0 && response.filteredstate.length !==0 && response.filteredShapes.length) {
      pop_table(filteredData), 
      pop_table(filteredstate),
      pop_table(filteredShapes)
    }
    else if (response.filteredData.length !==0) {
      pop_table(filteredData)
    }
    else if (response.filteredstate.length !==0) {
      pop_table(filteredstate)
    }
    else if (response.filteredShapes.length !==0) {
      pop_table(filteredShapes)
    }
    else {tbody.append("tr").append("td").text("No results found!")
    }
}
 /* filteredData.forEach((sightings) => {
    var row = tbody.append("tr");
    Object.entries(sightings).forEach(([key,value]) => {
      var cell = row.append("td");
      cell.text(value);
    })
  });*/


function runShape() {
  d3.event.preventDefault();
  var inputElement = d3.select("Sdropdown");
  var inputValue = inputElement.property("value");
  var filteredShapes = tableData.filter(event => event.shapes === inputValue)
  var dataTable = d3.selectAll("tbody>tr")
  dataTable.html("")
  pop_table(filteredShapes)
  newtable = pop_table(filteredShapes)
  return newtable
}


/*dropdownButton.on("change", function(runShape) {
.text(function(runShape){ return pop_table(filteredShapes);})
  // recover the option that has been chosen
  var filteredShapes= d3.select(this).property("value")

  // run the updateChart function with this selected option
  pop_table(filteredShapes)
})  (`alien ship shape ${shape}')
//var shapes = filteredsightings.map((ufos) => ufo.shape);
//*/
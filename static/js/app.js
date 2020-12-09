// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody")
// console.log(tableData)
var button = d3.select("#filter-btn");
var form = d3.select("#form2");
var form2 = d3.select("#state-id")
//state filter button and input field
/*var sfilter = document.createElement("Input");
sfilter.setAttribute("type", "text")
document.getElementById("filters").appendChild(sfilter);
//document.getElementById("filters").size = "113"; -not working 
var btn = document.createElement("button");
btn.innerHTML = "Filter by State";
document.getElementById("filters").appendChild(btn);*/

let li = document.createElement('li');
li.innerHTML = '<label for="State">Enter a State ID</label>';
li.innerHTML = '<input type="text" class="form-control" id="state-id" placeholder="nc"></input>'
const filters = document.querySelector('#filters');
filters.appendChild(li);

//<div class="mb-3">
  //input.id = 'state-id'
  //li.className = "form-control"
 // <input type="text" class="form-control" id="state-id" placeholder="nc">
//</div>


//document.addEventListener("click", () => {
  //  document.getElementById("filters").innerHTML = "Filter by State";
  //});
  // var inputText = d3.event.target.value;
var pop_table = (data_input) => {
  data.forEach((ufoSighting) => {
    var row = tbody.append("tr");
    Object.entries(ufoSighting).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
}

pop_table(tableData)

button.on("click", runEnter)
form.on("submit", runEnter);
form2.on("submit", runEnter)
//what about clicking for the others

// btn.on("click", runEnter)
// sfilter.on("submit", runEnter);

function runEnter() {
    // Prevent the page from refreshing
  d3.event.preventDefault();
  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");
  var inputValue = inputElement.property("value").trim();

  var inputelements = d3.select("#state-id")
  var inputstate = inputelements.property("value").toLowerCase().trim();

  // var inputElement = d3.select("Input");
  // var inputElement = d3.event.target.value
  // var inputValue = inputElement.property("value")
  var filteredstate = tableData.filter(event => event.state === inputstate);
  console.log(filteredstate)
  var filteredData = tableData.filter(event => event.datetime === inputValue);
  console.log(filteredData)
  var dataTable = d3.selectAll("tbody>tr")
  dataTable.html("")
  //tbody.selectAll("tr").remove();

  if (filteredData.length !== 0) {
    pop_table(filteredData)
  }
  else if (filteredstate.length !==0) {
    pop_table(filteredstate)
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


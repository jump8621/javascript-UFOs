// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody")

function pop_table(data){
  tbody.html("");
  data.forEach((ufoSighting) => {
    var row = tbody.append("tr");
    Object.entries(ufoSighting).forEach(([key, val]) => {
      var cell = row.append("td");
      cell.text(val);
    });
  });
}

function handleclick(){
  var date = d3.select("#datetime").property("value");
  var shape = d3.select("#Sdropdown").property("value");
  var state = d3.select("#stateid").property("value").toLowerCase().trim();
  var city = d3.select("#ufocity").property("value").toLowerCase().trim();
  var country = d3.select("#countryid").property("value").toLowerCase().trim();

  let filterData = tableData;
  if (date) {
    filterData = filterData.filter(row => row.datetime === date);
  }
  if (city) {
    filterData = filterData.filter(row => row.city === city);
  }
  if (state) {
    filterData = filterData.filter(row => row.state === state);
  }
  if (country) {
    filterData = filterData.filter(row => row.country === country);
  }
  if (shape != "option") {
    filterData = filterData.filter(row => row.shape === shape);
  };

  pop_table(filterData)
}
d3.selectAll("#filter-btn").on("click", handleclick);
pop_table(tableData);



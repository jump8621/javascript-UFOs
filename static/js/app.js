// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody")
console.log(tableData)


data.forEach((ufoSighting) => {
    var row = tbody.append("tr");
    Object.entries(ufoSighting).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });

// var dates = date.filter(function(date) {
//   return date.value === value;
// })
// console.log(dates)


var button = d3.select(".button");
var form = d3.select(".form")
button.on("click", runEnter);
form.on("submit", runEnter);

//var team = roster.filter(function(roster) {
//  return roster.madeTeam === true;
//})

//console.log(team);


function runEnter() {
  d3.event.preventDefault();
  var inputElement = d3.select("#datetime");
  var inputValue = inputElement.property("value");
  console.log(inputValue);
  console.log(tableData);
  var filteredData = tableData.filter(ufo => ufo.datetime === inputValue);
  console.log(filteredData);
}
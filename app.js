const apiURL = ''
var occasionData
var occasionSelected

fetch(apiUrl)
.then(response => response.json())
.then(response => occasionData = response)

function setOccasion(sel) {
  console.log('its work');
  console.log(selection);
  occasionSelected = sel.options[sel.selectedIndex].text
  console.log(occasionSelected);
}

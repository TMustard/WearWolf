const apiURL = 'https://fast-cove-95183.herokuapp.com/';
var occasionData
var occasionSelected

fetch(apiURL)
.then(response => response.json())
.then(response => {
  occasionData = response;
  addOption()
})

function setOccasion(sel) {
 occasionSelected = sel.options[sel.selectedIndex].text;
}

document.querySelector("#dropD").addEventListener('submit', function(event){
 console.log('working')
 event.preventDefault();
 populateDescription();
});

function populateDescription () {
 var descriptionP = document.querySelector(".description-content")
 console.log(descriptionP)
        // $ul.removeChild($li)
 occasionData.map(item => {
   if (item.occasion === occasionSelected) {
     var outfitDesc = item.outfitDescription
     descriptionP.innerHTML = outfitDesc
     var wolfImage = document.querySelector(".wolf-image")
     wolfImage.src = item.image

     var $ul = document.querySelector('.accessories-list')

     while ($ul.firstChild) {
       $ul.removeChild($ul.firstChild)
     }

     for (var i = 0; i < item.accDescription.length; i++) {
       var $li = document.createElement('li')
       var $ul = document.querySelector('.accessories-list')

       $li.innerHTML = item.accDescription[i]
       $ul.appendChild($li)
     }
   }
 })
};

function addOption () {
  var dropdownList = document.querySelector('select')
  for (var i = 6; i < occasionData.length; i++) {
    var newOcc = occasionData[i].occasion
    var newOption = document.createElement('option')
    newOption.innerHTML = newOcc
    dropdownList.appendChild(newOption)
  }
  document.querySelector("#dropD").addEventListener('submit', function(event){
   console.log('working')
   event.preventDefault();
   populateDescription2();
  });
}


function populateDescription2 () {
 var descriptionP = document.querySelector(".description-content")
 console.log(descriptionP)
        // $ul.removeChild($li)
 occasionData.map(item => {
   if (item.occasion === occasionSelected) {
     var outfitDesc = item.outfitDescription
     descriptionP.innerHTML = outfitDesc
     var wolfImage = document.querySelector(".wolf-image")
     wolfImage.src = item.image

     var $ul = document.querySelector('.accessories-list')

     while ($ul.firstChild) {
       $ul.removeChild($ul.firstChild)
     }
       var $li = document.createElement('li')
       var $ul = document.querySelector('.accessories-list')

       $li.innerHTML = item.accDescription
       $ul.appendChild($li)
   }
 })
};

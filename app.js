const apiURL = 'https://fast-cove-95183.herokuapp.com/';
var occasionData
var occasionSelected

fetch(apiURL)
.then(response => response.json())
.then(response => occasionData = response)

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
 occasionData.map(item => {
   if (item.occasion === occasionSelected) {
     var outfitDesc = item.outfitDescription
     descriptionP.innerHTML = outfitDesc
     var wolfImage = document.querySelector(".wolf-image")
     wolfImage.src = item.image
     for (var i = 0; i < item.accDescription.length; i++) {
       var $li = document.createElement('li')
       var $ul = document.querySelector('.accessories-list')
       $li.innerHTML = item.accDescription[i]
       $ul.appendChild($li)
     }
   }
 })
};

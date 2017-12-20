const apiURL = 'https://fast-cove-95183.herokuapp.com/';

document.getElementById('user-occasion').addEventListener('submit', function(event){
    event.preventDefault();
    const MessageData = new FormData(event.target);
    const objectToSend = {
      "occasion": MessageData.get("suggest"),
      "image": MessageData.get("image"),
      "outfitDescription": MessageData.get("descript"),
      "accDescription": MessageData.get("accessories")
    };
    console.log(objectToSend)
    sendMessage(objectToSend);
  });


function sendMessage(submissionObject){
  fetch(apiURL, {
    method: 'POST',
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify(submissionObject),
  })
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(console.error);
}

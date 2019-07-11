// Nexus Clash profile Lookup
// This utilizes the NC profile API to search characters by name
// I am new at this, so, uhm, sorry probably.
//written by plscks
function nameGrab() {
  // Gets the text the user has typed into the input field
  var charName = document.getElementById("name").value;
  charName = charName.replace(/\s+/g, '%20');
  return charName
}

function lookup(name) {
  // looks up name in the NC profile API, then stores json data
  console.log("Character name looked up: " + name);
  alert(name);
  var requestUrl = "https://www.nexusclash.com/modules.php?name=Character&charname=" + name + "&format=json";

  fetch(requestUrl)
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    console.log(JSON.stringify(myJson));
  });

  alert("STOP!")
}

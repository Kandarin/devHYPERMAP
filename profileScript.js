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
  var data = JSON.parse(get(requestUrl));
  console.log(data);
  console.log(data.result);
  alert("STOP!")
  console.log(data.result.character);
  console.log(data.result.character.id);
  alert("Character ID: " + data.result);
}

function get(url) {
  var req = new XMLHttpRequest();
  req.open('GET', url, false);
  req.send(null);
  console.log(req.responseText);
}

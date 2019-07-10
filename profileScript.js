// Nexus Clash profile Lookup
// This utilizes the NC profile API to search characters by name
// I am new at this, so, uhm, sorry probably.
//written by plscks
function nameGrab() {
  var charName = document.getElementById("name").value;
  return charName
}

function lookup(name) {
  console.log("Character name looked up: " + name);
  alert(name);
}

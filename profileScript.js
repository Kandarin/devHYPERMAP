
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
  //alert(name);
  var requestUrl = "https://www.nexusclash.com/modules.php?name=Character&charname=" + name + "&format=json";
  console.log(requestUrl);
  var corsUrl = 'https://cors-anywhere.herokuapp.com/' + requestUrl
  console.log(corsUrl);

  getUserAsync(corsUrl)
    .then(data => parseJson(data));

}

function parseJson(data) {
  console.log(data);
  alert("We made it this far!");
}

async function getUserAsync(url)
{
  let response = await fetch(url);
  let data = await response.json()
  return data;
}

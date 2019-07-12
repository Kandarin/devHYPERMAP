
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
  console.log(requestUrl);
  var corsUrl = 'https://cors-anywhere.herokuapp.com/' + requestUrl
  console.log(corsUrl);
  var charData = ohGosh(corsUrl);
  console.log(charData);

  alert("STOP!");
}

function ohGosh(url) {
  fetch(url)
  .then(function(response) {
    alert("Log 1");
    console.log("Log 1");
    return response.json();
  })
  .then(function(myJson) {
    alert("Log 2");
    console.log("Log 2");
    console.log(JSON.stringify(myJson));
    var charData = JSON.stringify(myJson);
    alert("STOP LAST!")
    return charData
  });
}

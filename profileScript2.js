// Oh bother, let's try this a little differently.
// Nexus Clash profile Lookup v0.2
// This utilizes the NC profile API to search characters by name
// I am new at this, so, uhm, sorry probably.
//written by plscks
function nameGrab() {
  // Gets the text the user has typed into the input field
  var charName = document.getElementById("name").value;
  charName = charName.replace(/\s+/g, '%20');
  return charName
}

async function lookup() {
  // looks up name in the NC profile API, then stores json data
  name = nameGrab();
  await console.log("Character name looked up: " + name);
  //alert(name);
  var requestUrl = "https://www.nexusclash.com/modules.php?name=Character&charname=" + name + "&format=json";
  await console.log(requestUrl);
  var corsUrl = 'https://cors-anywhere.herokuapp.com/' + requestUrl
  await console.log(corsUrl);

  var jsonData = await getData2(corsUrl);
  console.log(jsonData);
  alert("STOP! Okay, I think that worked.....");
  console.log("Character Name: " + jsonData.result.character.name.name);
  console.log("Character ID: " + jsonData.result.character.id);

  alert('Did that work?');
}

async function getData2(corsUrl) {
    const response = await fetch(corsUrl, {});
    const json = await response.json();

    return json;
}

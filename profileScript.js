
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


async function lookup(name) {
  // looks up name in the NC profile API, then stores json data
  await console.log("Character name looked up: " + name);
  //alert(name);
  var requestUrl = "https://www.nexusclash.com/modules.php?name=Character&charname=" + name + "&format=json";
  await console.log(requestUrl);
  var corsUrl = 'https://cors-anywhere.herokuapp.com/' + requestUrl
  await console.log(corsUrl);

  //await getUserAsync(corsUrl)
  //  .then(data => await parseJson(data));

  const dataJson = async () => {
  console.log(await getUserAsync(corsUrl));
  }
    //.then(dataJson => await parseJson(data));

  await console.log(dataJson);
  await alert("STOP!");

}

function parseJson(data) {
  console.log(data);
  alert("We made it this far!");
  return data;
}

async function getData2(corsUrl) {
    const response = await fetch(corsUrl, {});
    const json = await response.json();

    return json;
}

async function getUserAsync(url)
{
  let response = await fetch(url);
  let data = await response.json()
  return data;
}

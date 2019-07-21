// Oh bother, let's try this a little differently.
// Nexus Clash profile Lookup v0.2
// This utilizes the NC profile API to search characters by name
// I am new at this, so, uhm, sorry probably.
//written by plscks
function nameGrab() {
  // Gets the text the user has typed into the input field
  var charName = document.getElementById("inPut").value;
  charName = charName.replace(/\s+/g, '%20');
  return charName
}

async function lookup() {
  // looks up name in the NC profile API, then stores json data
  name = nameGrab();
  var requestUrl = "https://www.nexusclash.com/modules.php?name=Character&charname=" + name + "&format=json";
  var corsUrl = 'https://cors-anywhere.herokuapp.com/' + requestUrl

  var jsonData = await getData2(corsUrl);

  if (jsonData.result.character.id == 0) {
    document.getElementById('charName').innerHTML = "No character exists by this name";
    document.getElementById('charInfo2').innerHTML = "<img src='nochar.png'>";
    return;
  }

  var ncProfLink = "https://www.nexusclash.com/modules.php?name=Game&op=character&id=";
  var namePrefix = jsonData.result.character.name.prefix;
  var nameName = jsonData.result.character.name.name;
  var nameSuffix = jsonData.result.character.name.suffix;
  var nameDomain = jsonData.result.character.name.domain;
  var fullName = namePrefix + nameName + nameSuffix + nameDomain;
  document.getElementById('charName').innerHTML = " <a href='" + ncProfLink + jsonData.result.character.id + "'>[profile]</a>" + " " + fullName;
  document.getElementById('charLevel').innerHTML = jsonData.result.character.level;
  var currentClass = jsonData.result.character.classes[jsonData.result.character.classes.length - 1];
  document.getElementById('charClass').innerHTML = currentClass;

  if (jsonData.result.character.status.alive == true) {
    document.getElementById('aliveStatus').innerHTML = "<span style='color: #28e713;'>This character is alive</span>";
  } else {
    document.getElementById('aliveStatus').innerHTML = "<span style='color: #FD1D53;'>This character is a formless spirit, floating above the planes, dead.</span>"
  }

  var factionLink = jsonData.result.character.faction.url;
  document.getElementById('charPosition').innerHTML = "<a href='" + factionLink + "'>[link]</a>" + " " + jsonData.result.character.faction.rank + " in ";
  document.getElementById('charFaction').innerHTML = jsonData.result.character.faction.name;
  document.getElementById('charInfo2').innerHTML = "<img src='" + jsonData.result.character.avatar.url + "'>";
  document.getElementById('physDescription').innerHTML = jsonData.result.character.description.physical;
  document.getElementById('personalDescription').innerHTML = jsonData.result.character.description.personal;
  //await badgeParse(jsonData.result.character.badges);
}

async function badgeParse(badges) {
  var alchoholBadges = ["Low Tolerance", "Frat Boy", "Alcoholic", "Sinatra", "Friend of Bill"];
  var angelBadges = ["Perverter", "Ruiner", "Nightmare Whisperer", "Voice of Armageddon", "The End of Hope"];
  var booksBadges = ["Reader", "Bookworm", "Librarian", "Bibliophile", "Teachers Pet"];
  var deathsBadges = ["Buried", "Wormfood", "Aspect Hunter", "Lich Pet", "Coffinmakers Friend"];
  var demonsBadges = ["Cleanser", "", "", "", ""];
  var doorsDestBadges = ["", "", "", "", ""];
  var doorsRepBadges = ["", "", "", "", ""];
  var foodBadges = ["", "", "", "", ""];
  var itemsCraBadges = ["", "", "", "", ""];
  var itemsRepBadges = ["", "", "", "", ""];
  var killsBadges = ["", "", "", "", ""];
  var locksBadges = ["", "", "", "", ""];
  var petsBadges = ["", "", "", "", ""];
  var pillsBadges = ["", "", "", "", ""];
  var powRemBadges = ["", "", "", "", ""];
  var powResBadges = ["", "", "", "", ""];
  var targetsBadges = ["", "", "", "", ""];
}

async function getData2(corsUrl) {
    const response = await fetch(corsUrl, {});
    const json = await response.json();

    return json;
}

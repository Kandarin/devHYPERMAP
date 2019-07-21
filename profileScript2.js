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
  var damDealBadges = ["Crusher", "Smasher", "Bloodletter", "Assassin", "Surgeons Lament", "Widowmaker"];
  var damTakeBadges = ["Punching Bag", "Bruised", "Crushed", "All Stitched Up", "Keeping Healers in Business", "Constantly in Traction"];
  var deathsBadges = ["Buried", "Wormfood", "Aspect Hunter", "Lich Pet", "Coffinmakers Friend"];
  var demonsBadges = ["Cleanser", "Demonslayer", "Hammer of Light", "Justicebringer", "Blade of the Word"];
  var doorsDestBadges = ["Opportunity Knocks", "Big Bad Wolf", "Heres Johnny", "Landshark", "Homewrecker"];
  var doorsRepBadges = ["Apprentice Carpenter", "Woodworker", "Journeyman Carpenter", "Architect", "Master Carpenter"];
  var foodBadges = ["Taste Tester", "Gourmand", "Glutton", "Masticator", "Food Critic"];
  var healBadges = ["Medic", "Doctor", "Surgeon", "Healer", "Bodyweaver", "Lifesaver"];
  var itemsCraBadges = ["Sweat Shop Worker", "Journeyman Blacksmith", "Factory Foreman", "Artisan", "Artifex"];
  var itemsRepBadges = ["Tinker", "Mender", "Fixer", "Handyman", "80s Action Hero"];
  var killsBadges = ["Killer", "Warrior", "Disciple of Death", "Master of Death", "Gravemaker"];
  var locksBadges = ["Thief", "Burglar", "Second-Story Man", "Locksmith", "Master of Tumblers"];
  var petsBadges = ["Dogkiller", "Exterminator", "Pest Control", "Trophy Hunter", "Director of Animal Testing"];
  var pillsBadges = ["I Have a Headache", "Pill-popper", "Living the High Life", "Monster Addict", "Slave to the Habit"];
  var powRemBadges = ["Wiresnipper", "Fusebreaker", "Circuitbreaker", "Blackout", "Degenerate"];
  var powResBadges = ["Apprentice Electrician", "Fusemaker", "Journeyman Electrician", "Circuitmaker", "Master Electrician"];
  var targetsBadges = ["Barn Assassin", "Sharpshooter", "Deadeye", "Gunslinger", "Hickok"];
  var exploreBadges = ["A New Chapter", "Academic Probation", "All In The Family", "And I Must Scream", "At All Costs", "Baraas Ascends", "Birthing pool", "Broken Alliance", "Broken Promises", "Circumnavigation", "Citadel", "Clinging to Life", "Cloudwatching", "Cops and Robbers", "Dedicated Few", "Enthroned", "Explosive Yield", "Fall of the Watcher", "Four Corners", "Fragmented Return", "Halls of the Scholar", "Halls of Wrath", "Idle hands", "In The Name Of Science", "Institute of Arts", "Into the Dark", "Last Confession", "Reasons to Live", "Remorse", "Stolen Victory", "Tapestry of Time", "The Earth Shudders", "The Legend", "The Little King", "The Rise of Kafa-El", "The Voice", "Under The Boot", "Untouched Wilderness", "Well of Truth", "What Once Was Lost"];
}

async function getData2(corsUrl) {
    const response = await fetch(corsUrl, {});
    const json = await response.json();

    return json;
}

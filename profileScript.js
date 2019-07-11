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

  $.ajaxSetup({
		crossOrigin: true
	});

  $.ajax({
    crossOrigin: true,
    url: requestUrl,
    proxy: "../proxy.php", //use local proxy because Google limits the use of Google Apps Script
    //dataType: "json", //no need. if you use crossOrigin, the dataType will be override with "json"
    //charset: 'ISO-8859-1', //use it to define the charset of the target url
    context: {},
    success: function(data) {
      alert(data);
      $( '#test' ).html(data);
    }
  })

  alert("STOP!")
}

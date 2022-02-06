// Client ID and API key from the Developer Console
var CLIENT_ID = "AIzaSyABczsXAfoY0Im0Y2mkIEWM4dDHtClQfOs";
var API_KEY =
  "525500369166-rittnm5c4ifpiecp16p2e50dpll4b4l8.apps.googleusercontent.com";

// Array of API discovery doc URLs for APIs used by the quickstart
var DISCOVERY_DOCS = [
  "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest",
];

// Authorization scopes required by the API; multiple scopes can be
// included, separated by spaces.
var SCOPES = "https://www.googleapis.com/auth/calendar";

var authorizeButton = document.getElementById("authorize_button");
var signoutButton = document.getElementById("signout_button");

/**
 *  On load, called to load the auth2 library and API client library.
 */
function handleClientLoad() {
  gapi.load("client:auth2", initClient);
}

/**
 *  Initializes the API client library and sets up sign-in state
 *  listeners.
 */
function initClient() {
  gapi.client
    .init({
      apiKey: API_KEY,
      clientId: CLIENT_ID,
      discoveryDocs: DISCOVERY_DOCS,
      scope: SCOPES,
    })
    .then(
      function () {
        // Listen for sign-in state changes.
        gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);

        // Handle the initial sign-in state.
        updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
        authorizeButton.onclick = handleAuthClick;
        signoutButton.onclick = handleSignoutClick;
      },
      function (error) {
        appendPre(JSON.stringify(error, null, 2));
      }
    );
}

/**
 *  Called when the signed in status changes, to update the UI
 *  appropriately. After a sign-in, the API is called.
 */
function updateSigninStatus(isSignedIn) {
  if (isSignedIn) {
    authorizeButton.style.display = "none";
    signoutButton.style.display = "block";
    $("#showBlock").toggle("slow");
  } else {
    authorizeButton.style.display = "block";
    signoutButton.style.display = "none";
  }
}

/**
 *  Sign in the user upon button click.
 */
function handleAuthClick(event) {
  gapi.auth2.getAuthInstance().signIn();
}

/**
 *  Sign out the user upon button click.
 */
function handleSignoutClick(event) {
  gapi.auth2.getAuthInstance().signOut();
  $("#showBlock").hide(1000);
}

/**
 * Append a pre element to the body containing the given message
 * as its text node. Used to display the results of the API call.
 *
 * @param {string} message Text to be placed in pre element.
 */
function appendPre(message) {
  var pre = document.getElementById("contents");
  var textContent = document.createTextNode(message + "\n");
  pre.appendChild(textContent);
}

function insertEvents() {
  var start = document.getElementById("start").value;
  var end = document.getElementById("end").value;
  var title = document.getElementById("title");
  var des = document.getElementById("des");

  var resource = {
    summary: title,
    description: des,
    location: "Tapie",
    start: {
      dateTime: start + ".000+08:00",
    },
    end: {
      dateTime: end + ".000+08:00",
    },
  };
  var request = gapi.client.calendar.events.insert({
    calendarId: "primary",
    resource: resource,
  });
  request.execute(function (resp) {
    console.log(resp);
  });
}

function login(){
    var account = $("#Login").val();
    if (account == "") {
        alert("帳號欄位不能為空，請輸入Google帳號");
    }
    else {
        $("#mainiframe", document.body).attr("src","https://calendar.google.com/calendar/embed?src="+ account +"%40gmail.com&ctz=Asia%2FTaipei"
            +"&src=emgtdHcudGFpd2FuI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&color=%23E4C441&color=%233F51B5");
            //下面這行是台灣節日+黃色+藍色(台灣節日)
        $("#showBlock").toggle("slow");
        $("#Logout_button").toggle("slow");
        $("#LoginBlock").hide(1000);
    }
}

function logout(){
    $("#showBlock").hide(1000);
    $("#Logout_button").hide(1000);
    $("#LoginBlock").toggle("slow");
}

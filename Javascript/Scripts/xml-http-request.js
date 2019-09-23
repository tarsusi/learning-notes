var xhr = new XMLHttpRequest();

xhr.open("GET", "https://ipinfo.io/json", true);
xhr.send();

xhr.addEventListener("readystatechange", processRequest, false);

function processRequest(event) {
  if (xhr.readyState === 4 && xhr.status === 200) {
    console.log(JSON.parse(xhr.response));
    document.querySelector("#ip-address").textContent = `Your ip address is ${
      JSON.parse(xhr.response).ip
    }`;
  }
}

/**
 * XMLHttpRequest objest has `readyState` property. And it has 5 different values
 *
 * VALUE    |   State               |   Description
 * 0        |   UNSENT              |   The open method hasn't been called yet
 * 1        |   OPENED              |   The send method has been called
 * 2        |   HEADERS_RECEIVED    |   The send method has been called and the HTTP request has returned the status and headers
 * 3        |   LOADING             |   The HTTP request response is being downloaded
 * 4        |   DONE                |   Everything has completed
 */

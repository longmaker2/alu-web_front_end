// Simple Callback

function createElement(data) {
  let paragraph = document.createElement("p");
  let text = document.createTextNode(data);
  paragraph.appendChild(text);
  document.body.appendChild(paragraph);
}

function queryWikipedia(callback) {
  let xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      callback(xhr.response.query.pages["21721040"].extract);
    }
  };
  xhr.open(
    "GET",
    "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*",
    true
  );
  xhr.responseType = "json";
  xhr.send(null);
}
queryWikipedia(createElement);

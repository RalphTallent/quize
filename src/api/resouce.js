async function sendRequest(url = "", method = "GET") {
  // Default options are marked with *

  const response = await fetch(url, {
    method: method,
    cache: "default",
    mode: "cors",
    // credentials: "sam-origin",
    headers: {
      // "Content-Type": "application/json",
      "Content-Type": "application/x-www-form-urlencoded"
      // "Access-Control-Allow-Origin": "*"
    },
    referrerPolicy: "no-referrer" // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    // body: JSON.stringify(data)
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

export default sendRequest;

import axios from "axios";

export function postAPI(url, data, handleData) {
  axios
    .post(url, {
      data,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "*",
      },
    })
    .then((response) => response.data)
    .then((data) => handleData(data))
    .catch((error) => catchErrors(error));
}

export function getAPI(url, handleData) {
  axios
    .get(url)
    .then((response) => response.data)
    .then((data) => handleData(data))
    .catch((error) => catchErrors(error));
}

function catchErrors(error) {
  if (error.response) {
    // The server responded with a status code outside the 2xx range
    console.log("Error response:", error.response);
  } else if (error.request) {
    // The request was made but no response was received
    console.log("Error request:", error.request);
  } else {
    // Something happened in setting up the request that triggered an error
    console.log("Error message:", error.message);
  }
}

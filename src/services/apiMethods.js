import axios from "axios";

export function postAPI(url, data, handleData, handleErrors) {
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
    .catch((error) => catchErrors(error, handleErrors));
}

export function getAPI(url, handleData, handleErrors) {
  axios
    .get(url)
    .then((response) => response.data)
    .then((data) => handleData(data))
    .catch((error) => catchErrors(error, handleErrors));
}

function catchErrors(error, handleErrors) {
  handleErrors();
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

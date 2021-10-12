import axios from 'axios'

const simpleGetCall = (url) => {
  const headers = {
    'Content-Type': 'application/json;charset=UTF-8',
    "Access-Control-Allow-Origin": "*",
  }
  return axios.post(url, {
    headers: headers,
  })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}


const simplePostCall = async (url, body) => {
  const headers = {
    'Content-Type': 'application/json;charset=UTF-8',
    crossorigin: true,
    'Access-Control-Allow-Credentials': true,
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    "Access-Control-Allow-Origin": "*",
  }
  return axios.post(url, body, {
    headers: headers,
  })
    .then(function (response) {
      console.log('Response from post call: ', response);
    })
    .catch(function (error) {
      console.log('Error occured while post call: ', error)
    });
}

export {
  simpleGetCall,
  simplePostCall
}
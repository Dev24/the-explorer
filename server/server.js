

//NOT WORKING

/*
// Set the configuration settings
const credentials = {
  client: {
    id: 'l7xx8ed3fa1890d547aca97d9c703985d2d7',
    secret: 'be3cbecfcbd54435a2ae3f1821cf398d'
  },
  auth: {
    tokenHost: 'https://apis.discover.com',
    tokenPath: '/auth/oauth/v2/token'
  },
  grant_type: "client_credentials",
  scope: "CITYGUIDES"
};

// Initialize the OAuth2 Library
const oauth2 = require('simple-oauth2').create(credentials);
*/



var axios = require("axios");
axios.request({
  url: "/auth/oauth/v2/token",
  method: "post",
  headers: {
      'Access-Control-Allow-Origin': '*',
  },
  baseURL: "https://apis.discover.com",
  auth: {
      username: "l7xx8ed3fa1890d547aca97d9c703985d2d7", // This is the client_id
      password: "be3cbecfcbd54435a2ae3f1821cf398d" // This is the client_secret
  },
  data: {
      "grant_type": "client_credentials",
      "scope": "CITYGUIDES"    
  }
  }).then(respose => {
      console.log(respose);  
  });









const express = require('express')
const app = express()
const port = 3030

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))






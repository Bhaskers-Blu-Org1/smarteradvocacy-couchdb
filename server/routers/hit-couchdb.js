const express = require('express');
//const NodeCouchDb = require('node-couchdb');

module.exports = function (app) {
  const router = express.Router();

  router.get('/', function (req, res, next) {

    var request = require('request');

    var id = "test";
    request({
      uri: "http://datastore-default.apps.riffled.os.fyre.ibm.com/advocacy/"+id,
      method: "PUT",
      headers: {
          'Content-type': 'application/json'
      },
      body: { "test-key": "test-value"},
      json: true
    }, (error, response, body) => {
      console.log(error)
    })
    

    res.status(200).send("hi");
  });

  app.use('/hit-couchdb', router);
}
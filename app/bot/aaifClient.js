'use strict';

var Client = require('node-rest-client').Client;

let apiUrl = 'http://www.anapioficeandfire.com/api';

class AaifClient {

  constructor() {
    this.client = new Client();
    this.registerEndpoints();
  }

  books(id, parameters, cb) {
    let args = {
      path: { 'id': id },
      parameters: parameters
    };
    this.client.methods.books(args, cb);
  }

  characters(id, parameters, cb) {
    let args = {
      path: { 'id': id },
      parameters: parameters
    };
    this.client.methods.characters(args, cb);
  }

  houses(id, parameters, cb) {
    let args = {
      path: { 'id': id },
      parameters: parameters
    };
    this.client.methods.houses(args, cb);
  }

  registerEndpoints() {
    client.registerMethod('books', apiUrl + '/books/${id}', 'GET');
    client.registerMethod('characters', apiUrl + '/characters/${id}', 'GET');
    client.registerMethod('houses', apiUrl + '/houses/${id}', 'GET');
  }

}

module.exports = AaifClient;

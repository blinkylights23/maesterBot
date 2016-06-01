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
    this.client.registerMethod('books', apiUrl + '/books/${id}', 'GET');
    this.client.registerMethod('characters', apiUrl + '/characters/${id}', 'GET');
    this.client.registerMethod('houses', apiUrl + '/houses/${id}', 'GET');
  }

}

module.exports = AaifClient;

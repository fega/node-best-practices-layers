const Datastore = require('nedb');

const userCollection = new Datastore();

module.exports = { userCollection };

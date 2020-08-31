const db = require('../config');

function getResources() {
  return db('resources');
}

function findById(id) {
  return db('resources').where({ id }).first();
}

function add(resource) {
  return db('resources')
    .insert(resource)
    .then(id => findById(id[0]));
}

module.exports = { getResources, add };

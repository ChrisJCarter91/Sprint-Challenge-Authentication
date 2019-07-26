const db = require('../database/dbConfig');

module.exports = {
  find,
  findBy,
  findById,
  add,
};

function find() {
  const query = db('users').select('id', 'username', 'password');
  return query;
}

function findBy(username) {
  return db('users').where(username);
}

function findById(id) {
  return db('users')
    .where({ id })
    .first();
}

async function add(user) {
  const [id] = await db('users').insert(user);

  return findById(id);
}
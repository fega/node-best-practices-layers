const { userCollection } = require('../../services/NeDb');

module.exports = {
  async getUsers(page, limit) {
    return new Promise((resolve, reject) => userCollection
      .find({}).skip(page * limit).limit(limit).exec((err, docs) => {
        if (err) return reject(err);
        return resolve(docs);
      }));
  },

  async getUser(id) {
    return new Promise((resolve, reject) => userCollection.findOne({ _id: id }, (err, docs) => {
      if (err) return reject(err);
      return resolve(docs);
    }));
  },

  async createUser(user) {
    return new Promise((resolve, reject) => userCollection.insert(user, (err, docs) => {
      if (err) return reject(err);
      return resolve(docs);
    }));
  },

  async updateUser(id, { email, username }) {
    const update = { $set: { email, username } };

    return new Promise((resolve, reject) => userCollection
      .update({ _id: id }, update, {}, (err, docs) => {
        if (err) return reject(err);
        return resolve(docs);
      }));
  },

  async deleteUser(id) {
    return new Promise((resolve, reject) => userCollection
      .remove({ _id: id }, (err, docs) => {
        if (err) return reject(err);
        return resolve(docs);
      }));
  },
};

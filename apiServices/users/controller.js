const userModel = require('./model');
const userDto = require('./dto');

module.exports = {

  async getUsers(req, res) {
    const page = parseInt((req.query.page || 0).toString(), 10);
    const limit = parseInt((req.query.limit || 10).toString(), 10);

    const users = await userModel.getUsers(page, limit);

    return res.send(userDto.multiple(users, req.user));
  },

  async getUser(req, res) {
    const user = await userModel.getUser(req.params.id);
    if (!user) return res.sendStatus(404);

    return res.send(userDto.single(user, req.user));
  },

  async createUser(req, res) {
    if (!req.body.username) return res.sendStatus(400);
    if (!req.body.password) return res.sendStatus(400);
    if (!req.body.email) return res.sendStatus(400);

    const users = await userModel.createUser({
      username: req.body.username,
      password: req.body.password,
      email: req.body.email,
    });

    return res.send(userDto.single(users, req.user));
  },

  async updateUser(req, res) {
    if (!req.body.username) return res.sendStatus(400);
    if (!req.body.email) return res.sendStatus(400);
    const user = await userModel.getUser(req.params.id);
    if (!user) return res.sendStatus(404);

    await userModel.updateUser(req.params.id, {
      username: req.body.username,
      email: req.body.email,
    });

    return res.sendStatus(204);
  },
  async deleteUser(req, res) {
    await userModel.deleteUser(req.param.id);
    res.sendStatus(204);
  },
};

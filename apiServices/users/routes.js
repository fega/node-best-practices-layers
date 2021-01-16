const express = require('@awaitjs/express');
const controller = require('./controller');

const router = express.Router();

router.getAsync('/', controller.getUsers);
router.postAsync('/', controller.createUser);
router.getAsync('/:id', controller.getUser);
router.patchAsync('/:id', controller.updateUser);
router.deleteAsync('/:id', controller.deleteUser);

module.exports = router;

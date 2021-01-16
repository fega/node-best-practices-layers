/* eslint-disable no-underscore-dangle */
// eslint-disable-next-line
const single = (resource, authUser) => ({
  id: resource._id,
  username: resource.username,
  email: resource.email,
});

const multiple = (resources, authUser) => resources.map((resource) => single(resource, authUser));

module.exports = {
  single,
  multiple,
};

const { send } = require('micro');

module.exports = async (_, res) => {
  send(res, 200, 'Hello world');
};

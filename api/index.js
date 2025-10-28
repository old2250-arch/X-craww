const appModule = require('../Voltage Web Api/index.js');
const app = appModule.app || appModule;

// Vercel serverless expects a (req, res) handler.
module.exports = (req, res) => {
  // Express app is a function (req,res) so call it directly.
  return app(req, res);
};

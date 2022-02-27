const fs = require("fs");

module.exports = {
  presets: [
    ["@babel/preset-env", {
      targets: { node: "current" },
    }],
  ],
  sourceMaps: "both",
  include: [
    fs.realpathSync("src"),
    fs.realpathSync("index.js"),
    fs.realpathSync("models"),
    fs.realpathSync("migrations"),
    fs.realpathSync("seeders"),
  ],
};

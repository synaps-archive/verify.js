const path = require('path');

const entryPoints = [
  [],
];

const entryPointPaths = entryPoints.map(entryPoint => path.join(...entryPoint));

module.exports = {
  entryPoints,
  entryPointPaths,
};

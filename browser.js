
function makeCanvas() {
  return document.createElement('canvas');
}

var scratchblocks = module.exports = require('./src/scratchblocks.js')(window, makeCanvas);

// add our CSS to the page
var style = scratchblocks.makeStyle();
document.head.appendChild(style);

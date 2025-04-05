const svgexport = require('svgexport');
const path = require('path');

svgexport.render({
  'input': path.join(__dirname, 'assets/icon.svg'),
  'output': path.join(__dirname, 'assets/icon.png')
}, function (err) {
  if (err) {
    console.error('Error converting SVG to PNG:', err);
  } else {
    console.log('Icon converted successfully!');
  }
}); 
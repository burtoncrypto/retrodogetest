const fs = require('fs');
const path = require('path');

fs.readdir(__dirname, (err, files) => {
  if (err) {
    console.err(err);
    return;
  }

  files.forEach(file => {
    if (path.extname(file) === '.json') {
      const json = JSON.parse(fs.readFileSync(file, { encoding:'utf8', flag:'r' }));
      json.image = `https://github.com/burtoncrypto/retrodogetest/${path.basename(file, '.json')}.jpg`;
      fs.writeFileSync(file, JSON.stringify(json, null, 2));
    }
  });
});

const webpack = require('webpack');
const config = require('../webpack.prod');

const r = webpack(config);

r.run((err, stats) => {
  if (err) {
    console.error(err);
    return;
  }

  const info = stats.toJson();

  if (stats.hasErrors()) {
    console.error(info.errors);
  }

  if (stats.hasWarnings()) {
    console.warn(info.warnings);
  }

  console.log(info);
});

module.exports = api => {
  return {
    "presets": [
      ["@babel/preset-env", {
        "modules": api.env('test') ? 'auto' : false,
        "useBuiltIns": "usage",
        "corejs": 3,
        "targets": { ie: '11' }
      }],
      "@babel/preset-typescript",
      "@babel/react"
    ],
    "plugins": [
      "@babel/plugin-proposal-class-properties",
      "@babel/proposal-object-rest-spread",
      // https://github.com/gaearon/react-hot-loader/issues/1227
      // "react-hot-loader/babel"
    ],
  }
};

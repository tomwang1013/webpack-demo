module.exports = api => {
  return {
    "presets": [
      ["@babel/preset-env", { "modules": api.env('test') ? 'auto' : false, "useBuiltIns": "usage", "corejs": 3 }],
      "@babel/preset-typescript",
      "@babel/react"
    ],
    "plugins": [
      "@babel/plugin-proposal-class-properties",
      "@babel/proposal-object-rest-spread",
      "react-hot-loader/babel"
    ]
  }
};

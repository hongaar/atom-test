var path = require("path");

module.exports = {
    entry: {
      app: ["./app/main.js"]
    },
    output: {
      path: path.resolve(__dirname, "build/assets"),
      publicPath: "/assets/",
      filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" },
            { test: /\.scss$/, loaders: ["style", "css", "sass"]},
            { test: /\.handlebars$/, loader: "handlebars", query: { inlineRequires: '\/media\/' }},
            { test: /\.json$/, loader: "json" },
            { test: /\.(png|jpg)$/, loader: 'url?limit=8192' },
        ]
    }
};

const { CracoAliasPlugin } = require("react-app-alias");

module.exports = {
  plugins: [
    {
      plugin: CracoAliasPlugin,
      options: {},
    },
  ],
  style: {
    css: {
      loaderOptions: {
        modules: {
          localIdentName: "[local]___[hash:base64:5]",
          mode: "global",
        },
      },
    },
  },
};

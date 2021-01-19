const path = require("path");

module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app",
  ],

  webpackFinal: async (config, { configType }) => {
    config.module.rules.push({
      test: /\.css$/,
      loaders: [
        {
          loader: "postcss-loader",
          options: {
            sourceMap: false,
            config: {
              path: "./.storybook/",
            },
          },
        },
      ],
      include: path.resolve(__dirname, "../"),
    });
    return config;
  },
};

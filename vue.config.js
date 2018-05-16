const path = require("path");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
// ExtractTextPlugin = require("extract-text-webpack-plugin"),
// HtmlWebpackPlugin = require("html-webpack-plugin");
// chain = require("webpack-chain");

module.exports = {
  lintOnSave: true,
  configureWebpack: config => {
    // const extractHTML = config.plugins.find(
    //   plugin => plugin instanceof HtmlWebpackPlugin
    // );
    // extractHTML.options.template = path.resolve(__dirname, "src/rosem/admin/index.html");
    return {
      resolve: {
        alias: {
          // "rosem.css": path.resolve(__dirname, "src/rosem-css/style.pcss"),
          // "rosem-ui": path.resolve(__dirname, "src/rosem-ui"),
        }
      },
      module: {
        rules: [
          {
            test: /\.postcss$/,
            oneOf: [
              {
                resourceQuery: /module/,
                use: [
                  {
                    loader: "vue-style-loader",
                    options: {
                      sourceMap: false,
                      shadowMode: false
                    }
                  },
                  {
                    loader: "css-loader",
                    options: {
                      minimize: false,
                      sourceMap: false,
                      importLoaders: 1,
                      modules: true,
                      localIdentName: "[name]_[local]_[hash:base64:5]"
                    }
                  },
                  {
                    loader: "postcss-loader",
                    options: {
                      sourceMap: false
                    }
                  }
                ]
              },
              {
                use: [
                  {
                    loader: "vue-style-loader",
                    options: {
                      sourceMap: false,
                      shadowMode: false
                    }
                  },
                  {
                    loader: "css-loader",
                    options: {
                      minimize: false,
                      sourceMap: false,
                      importLoaders: 1
                    }
                  },
                  {
                    loader: "postcss-loader",
                    options: {
                      sourceMap: false,
                      config: {
                        path: ".postcssrc.js"
                      }
                    }
                  }
                ]
              }
            ]
          }
        ]
      }
    };
  }
};

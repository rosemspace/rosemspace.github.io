const path = require("path");
  // ExtractTextPlugin = require("extract-text-webpack-plugin"),
  // HtmlWebpackPlugin = require("html-webpack-plugin");
  // Config = require("webpack-chain");

module.exports = {
  lintOnSave: true,
  configureWebpack: (config) => {
    // const extractHTML = config.plugins.find(
    //   plugin => plugin instanceof HtmlWebpackPlugin
    // );
    // extractHTML.options.template = path.resolve(__dirname, "src/rosem/admin/index.html");

    return {
      resolve: {
        alias: {
          "rosem.css": path.resolve(__dirname, "src/rosem-css/style.pcss"),
          "rosem-ui": path.resolve(__dirname, "src/rosem-ui"),
        }
      },
      module: {
        rules: [
          {
            test: /\.pcss$/,
            use: [
              "vue-style-loader",
              {
                loader: "css-loader",
                options: {
                  importLoaders: 1,
                  sourceMap: true
                }
              },
              {
                loader: "postcss-loader",
                options: {
                  sourceMap: true
                }
              }
            ]
          }

          // {
          //   test: /\.css$/,
          //   use: extractCSS.extract({
          //     fallback: "style-loader",
          //     use: "css-loader"
          //   })
          // },
          // {
          //   test: /\.pcss$/,
          //   use: extractCSS.extract({
          //     fallback: "style-loader",
          //     use: [
          //       {
          //         loader: "css-loader",
          //         options: {
          //           sourceMap: true
          //         }
          //       },
          //       {
          //         loader: "postcss-loader",
          //         options: {
          //           sourceMap: true
          //         }
          //       }
          //     ]
          //   })
          // }
        ]
      }
    };
  }
};

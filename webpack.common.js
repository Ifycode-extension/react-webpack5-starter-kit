import HtmlWebpackPlugin from 'html-webpack-plugin';
import { join } from 'path';

const common = {
  entry: {
    index: join(__dirname, 'src', 'index.js')
  },
  plugins: [
     //create HTML file that includes reference to bundled js
     new HtmlWebpackPlugin({
      template: 'public/index.html'
    })
  ]
}

export default common;
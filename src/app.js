const React = require('react');
const ReactDOMServer = require('react-dom/server');
const App = require('./Hello.jsx');
const data = [
  {
    name: '小明',
  },
  {
    name: '小花',
  },
  {
    name: '小刚',
  },
];
const html = ReactDOMServer.renderToString(<App data={data} />);
console.log('html', html);

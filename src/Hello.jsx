const React = require('react');
const Hello = ({ data }) => (
  <div>
    <h1>Hello</h1>
    <ul>
      {data.map((item) => (
        <li key={item.nam}>{item.name}</li>
      ))}
    </ul>
  </div>
);

module.exports = Hello;

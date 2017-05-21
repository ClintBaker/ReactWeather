const React = require('react');

var About = (props) => {
  return (
    <div>
      <h1 className="text-center page-title">About</h1>
      <p>This app was created in May 2017, by Clinton Baker, following a tutorial created by Andrew Mead.</p>
      <p>This is a weather application built using React.js</p>
      <p>Some of the tools used:</p>
      <ol>
        <li>
          <a href="https://facebook.github.io/react">React.js</a>
        </li>
        <li>
          <a href="http://openweathermap.org">Open Weather map</a> -- The API used for weather queries.
        </li>
      </ol>
    </div>
  );
};

module.exports = About;

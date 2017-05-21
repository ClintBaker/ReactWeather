const React = require('react');
const {Link} = require('react-router');

var Examples = (props) => {
  return (
    <div className>
      <h1 className="text-center">Examples</h1>
      <p>A few example locations to try out:</p>
      <ol>
        <li>
          <Link to='/?location=Boulder'>Bouler, CO</Link>
        </li>
        <li>
          <Link to='/?Rio'>Rio, Brazil</Link>
        </li>
      </ol>
    </div>
  );
};

module.exports = Examples;

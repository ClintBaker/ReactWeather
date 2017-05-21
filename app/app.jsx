const React = require('react');
const ReactDOM = require('react-dom');
const {Route, Router, IndexRoute, hashHistory} = require('react-router');

const Main = require('Main');
const Weather = require('Weather');
const About = require('About');
const Examples = require('Examples');

//Load foundation
require('style-loader!css-loader!foundation-sites/dist/foundation.min.css');
//App CSS
require('style-loader!css-loader!sass-loader!applicationStyles')
$(document).foundation();

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="about" component={About}/>
      <Route path="examples" component={Examples} />
      <IndexRoute component={Weather}/>
    </Route>
  </Router>,
  document.getElementById('app')
);

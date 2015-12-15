const React = require('react');
const ReactDOM = require('react-dom');

var SearchBar = React.createClass({
  render(){
    return (
      <div className="searchDiv">
        <input type="text" className="searchBar"/>
        <span className="serachIcon"></span>
      </div>
    )
  }
});
module.exports = SearchBar;

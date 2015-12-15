const React = require('react');
const ReactDOM = require('react-dom');
const FileTree = require('./FileTree');
var FileSystem = React.createClass({
  render(){
    return (
      <div className="fileSystem-container">
        <FileTree tree={this.props.tree} />
      </div>
    )
  }
});

module.exports = FileSystem;

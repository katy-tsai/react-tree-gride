const React = require('react');
const ReactDOM = require('react-dom');
const TreeNode = require('./FileTreeNode');
const SearchBar = require('./SearchBar');

var FileTree = React.createClass({
  displayName:'FileTree',
  propTypes:{
    tree: React.PropTypes.object,
    paddingLeft: React.PropTypes.number
  },
  getInitialState() {
    return  {tree:this.props.tree};
  },
  getDefaultProps() {
    return {
    }
  },
  render(){
    var tree = this.state.tree;
    var roots = tree._root.children;

    return (
      <div className="FileTree">
        <SearchBar />
        <TreeNode roots = {roots} paddingLeft={5} />
      </div>
    )
  },


});

module.exports = FileTree;

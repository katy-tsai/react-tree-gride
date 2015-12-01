const React = require('react');
var GridBody = React.createClass({

  render(){
    var tree = this.props.tree;
    var columnWidth = this.props.columnWidth;
    var treeViewWidth = this.props.treeViewWidth;
    console.log(this.props.tree);
    var divStyle ={
      width:this.props.width+'px'
    }
    return (
      <h1>
      hello body
      </h1>
    );
  }
});
module.exports = GridBody;

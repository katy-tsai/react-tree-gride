const React = require('react');
const GridHeader = require('./TreeGrid.header');
const GridBody = require('./TreeGrid.body');
var TreeGrid = React.createClass({
  displayName:'UITreeGrid',
  propTypes:{
    header:React.PropTypes.array.isRequired,
    itemName:React.PropTypes.array.isRequired,
    treeViewWidth:React.PropTypes.number,
    columnWidth:React.PropTypes.number,
    tree: React.PropTypes.object
  },
  getInitialState() {
    return  this.init(this.props);
  },
  getDefaultProps() {
    return {
      treeViewWidth: 150||this.props.treeViewWidth,
      columnWidth:100||this.props.columnWidth
    };
  },
  init(props) {
    var columnNum = this.props.header.length;
    var width=this.props.treeViewWidth+this.props.columnWidth*(columnNum-1);

    return {
      tree:this.props.tree,
      header:this.props.header,
      columnNum:columnNum,
      itemName:this.props.itemName,
      treeViewWidth:this.props.treeViewWidth,
      columnWidth:this.props.columnWidth,
      width:width
    };
  },
  render(){
    var header = this.state.header;
    var width = this.state.width;
    var tree = this.state.tree;
    var columnNum = this.state.columnNum;
    var itemName = this.state.itemName;
    return (
      <div className="container">
        <GridHeader header={header} width={width} treeViewWidth={this.props.treeViewWidth} columnWidth={this.props.columnWidth}/>
        <GridBody  itemName={itemName} tree={tree} width={width} treeViewWidth={this.props.treeViewWidth} columnWidth={this.props.columnWidth}/>
    </div>
    );
  }
});
module.exports = TreeGrid;

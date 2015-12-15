const React = require('react');
const ReactDOM = require('react-dom');

var TreeNode = React.createClass({
  getInitialState() {
    return  {tree:this.props.roots};
  },
  render(){
    var roots = this.props.roots;
    return (
      <ul>
          {roots.map(this.renderNode)}
      </ul>
    )
  },
  renderNode:function(node){
    var paddingLeft = this.props.paddingLeft+'px';
    var clickDivClass = (node.children.length>0)?((node.isOpen)?"tree_click tree_open_img":"tree_click tree_close_img"):"tree_click";
    return (
      <li key = {node.data.id} style={{paddingLeft:paddingLeft}} className="tree-row">
        <div>
          <div className={clickDivClass} onClick={this._handleTreeClick.bind(this,node.data.id)}></div>
          {node.data.item}
        </div>
        {(node.isOpen)?(node.children.length>0)?<TreeNode roots={node.children} paddingLeft={this.props.paddingLeft+5}/>:'':''}
      </li>
    )
  },
  _handleTreeClick(id,e){
    e.preventDefault();
     var tree = this.state.tree;
     tree.map(function(node){
       var nodeId = node.data.id;
       if(nodeId==id){
         node.isOpen =(!node.isOpen);
       }
     })
   this.setState({
     tree:tree
   });
  }


});

module.exports = TreeNode;

const React = require('react');
var GridRow = React.createClass({

  render(){
      const data = this.props.node.data;
      const isOpen = this.props.node.isOpen;
      const itemName = this.props.itemName;
      const columnWidth = this.props.columnWidth;
      const treeViewWidth = this.props.treeViewWidth;
      const rowClass= data.type+"-row";
      const iconClass = isOpen?"show-btn tree-open" :"show-btn tree-close";
      const childs = this.props.node.children;

      var width ={width: columnWidth+'px'};
      return (
        <div className={rowClass}>
          {
            itemName.map(function(name,index){
              if(name=='item'){
                 var  item_width ={width: treeViewWidth+'px'};
                 return (
                   <div className="tree-column" key={index} style={item_width}>
                      <span className={childs.length>0?iconClass:"show-btn"}  onClick={this.props.isOpen}>{data[name]}</span>
                   </div>
                 )
              }else{
                return (
                  <div className="tree-column" key={index} style={width}>{data[name]}</div>
                )
              }
            }.bind(this))
          }
        </div>
      );
  }
})

module.exports = GridRow;

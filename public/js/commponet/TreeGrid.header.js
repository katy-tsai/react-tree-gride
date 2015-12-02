const React = require('react');

var GridHeader = React.createClass({

  render(){
    var headers = this.props.header;
    var columnWidth = this.props.columnWidth;
    var treeViewWidth = this.props.treeViewWidth;
    var divStyle ={
      width:this.props.width+'px'
    }
    return (
      <div className="treeHeader" style={divStyle}>
        {headers.map(function(header,index){
          var width ={width: columnWidth+'px'};
          if(index==0){
            width ={width: treeViewWidth+'px'};
          }
          return (<div className={header} key={index} style={width}>{header}</div>)
      })}
      </div>
    );
  }
});
module.exports = GridHeader;

const React = require('react');
const PropTypes = require('react').PropTypes;
const ReactDOM = require('react-dom');
require('../../css/input.less');
var InputFileds = React.createClass({
  propTypes:{
    id1:React.PropTypes.string.isRequired,
    id2:React.PropTypes.string.isRequired,
    type:React.PropTypes.string,
    className:React.PropTypes.string,
    onBlur1:React.PropTypes.func,
    onChange1:React.PropTypes.func,
    onFocus1:React.PropTypes.func,
    style1:React.PropTypes.object,
    value1:React.PropTypes.any,
    onBlur2:React.PropTypes.func,
    onChange2:React.PropTypes.func,
    onFocus2:React.PropTypes.func,
    style2:React.PropTypes.object,
    value2:React.PropTypes.any,
    label:React.PropTypes.string.isRequired,
    errorMsg:React.PropTypes.string,
  },

  getDefaultProps(){
    return {
      type:'text'
    }
  },

  render(){
    var labelCss = this.props.value?'valueIsNotNull':(this.props.errorMsg?'labelError':'');
    var errorMsg = this.props.errorMsg?<span className="errorMsg">{this.props.errorMsg}</span>:'';

    return (
       <div className="group">
          <input id={this.props.id1}
                 type={this.props.type}
                 value={this.props.value1}
                 className = "input1"
                 onBlur={this.props.onBlur1}
                 onChange = {this.props.onChange1}
                 onFocus = {this.props.onFocus1}
                 style = {this.props.style1}
                 />
           <input id={this.props.id2}
                  type={this.props.type}
                  value={this.props.value2}
                  className = "input2"
                  onBlur={this.props.onBlur2}
                  onChange = {this.props.onChange2}
                  onFocus = {this.props.onFocus2}
                  style = {this.props.style2}
                  />
           <span className="hightlight"></span>
           <span className="bar"></span>
           <label htmlFor={this.props.id1} className={labelCss}>{this.props.label}</label>
           {errorMsg}
       </div>

    )
  }
});

module.exports = InputFileds;

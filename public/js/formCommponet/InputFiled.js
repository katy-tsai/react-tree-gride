const React = require('react');
const PropTypes = require('react').PropTypes;
const ReactDOM = require('react-dom');
require('../../css/input.less');
var InputFiled = React.createClass({
  propTypes:{
    id:React.PropTypes.string.isRequired,
    type:React.PropTypes.string,
    className:React.PropTypes.string,
    onBlur:React.PropTypes.func,
    onChange:React.PropTypes.func,
    onFocus:React.PropTypes.func,
    style:React.PropTypes.object,
    value:React.PropTypes.any,
    ref:React.PropTypes.string,
    label:React.PropTypes.string.isRequired,
    errorMsg:React.PropTypes.string,
    pattern:React.PropTypes.string,
    width:React.PropTypes.string
  },

  getDefaultProps(){
    return {
      type:'text'
    }
  },

  render(){
    var labelCss = this.props.value?'valueIsNotNull':(this.props.errorMsg?'labelError':'');
    var errorMsg = this.props.errorMsg?<span className="errorMsg">{this.props.errorMsg}</span>:'';
    var widthStyle = {width:this.props.width};
    return (
       <div className="group" style = {widthStyle}>
          <input id={this.props.id}
                 type={this.props.type}
                 value={this.props.value}
                 className = {this.props.className}
                 onBlur={this.props.onBlur}
                 onChange = {this.props.onChange}
                 onFocus = {this.props.onFocus}
                 style={this.props.style}
                 ref = {this.props.ref}
                 pattern = {this.props.pattern}
                 />
           <span className="hightlight"></span>
           <span className="bar" style = {widthStyle}></span>
           <label htmlFor={this.props.id} className={labelCss}>{this.props.label}</label>
           {errorMsg}
       </div>

    )
  }
});

module.exports = InputFiled;

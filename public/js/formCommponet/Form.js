const React = require('react');
const ReactDOM = require('react-dom');
const InputFiled = require('./InputFiled');
var Form = React.createClass({
  getInitialState() {
    return  {obj:{},errorObj:{}};
  },

  render(){
    return (
      <div>
        <h1> test</h1>
          <InputFiled label="姓名" id="name" onChange = {this._handleChange.bind(this,'name')} value={this.state.obj.name} />
          <InputFiled label="電話" id="mobile"  onChange = {this._handleChange.bind(this,'mobile')} onBlur={this._handleNumChange.bind(this,'mobile')}
            value={this.state.obj.mobile} errorMsg={this.state.errorObj.mobile} />
          <InputFiled label="電話2" id="mobile2"  onChange = {this._handleChange.bind(this,'mobile2')} onBlur={this._handleNumChange.bind(this,'mobile2')}
            value={this.state.obj.mobile2} errorMsg={this.state.errorObj.mobile2}  width="80px"/>M
          <InputFiled label="電話3" id="mobile3"  onChange = {this._handleChange.bind(this,'mobile3')} onBlur={this._handleNumChange.bind(this,'mobile3')}
            value={this.state.obj.mobile3} errorMsg={this.state.errorObj.mobile2}  width="80px"/> 天
      </div>
    )
  },
  _handleChange:function(filedName,e){
    var obj = this.state.obj;
    var value = e.target.value;
    obj[filedName] = e.target.value;
    this.setState({obj:obj});
    console.log(this.state.obj);
  },
  _handleNumChange:function(filedName,e){
    var obj = this.state.obj;
    var errorObj = this.state.errorObj;
    var value = e.target.value;
    if(value){
      if(!isNaN(parseFloat(value))){
        obj[filedName] = e.target.value;
        this.setState({obj:obj});
        errorObj[filedName]="";
        this.setState({errorObj:errorObj});
      }else{
        e.target.value="";
        obj[filedName] = null;
        this.setState({obj:obj});
        errorObj[filedName]="須為數字";
        this.setState({errorObj:errorObj});
      }
        console.log(this.state.obj);
    }

  }
});

module.exports = Form;

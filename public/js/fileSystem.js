const React = require('react');
const ReactDOM = require('react-dom');
const FileSystem = require('./fileCommponet/FileSystem');
const data = require('./data').data;
const treeData = require('./TreeData');
const tree = treeData.init(data);
require('../css/FileSystem');
ReactDOM.render(
  <FileSystem tree={tree}/>,
  document.getElementById('app')
)

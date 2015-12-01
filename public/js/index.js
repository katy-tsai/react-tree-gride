const React = require('react');
const ReactDOM = require('react-dom');
const TreeGrid = require('./commponet/TreeGrid');
const headers = ['header1','header2','header3','header4','header5'];
const data = require('./data').data;
const treeData = require('./TreeData');
const tree = treeData.init(data);

require('../css/TreeGrid');
ReactDOM.render(
  <TreeGrid header={headers} treeViewWidth={250} tree={tree}/>
  ,document.getElementById('app')
);

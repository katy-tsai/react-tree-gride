const React = require('react');
const ReactDOM = require('react-dom');
const TreeGrid = require('./commponet/TreeGrid');
const headers = ['item','price','num','test','test2'];
const itemName = ['item','price','num','test','test2'];
const data = require('./data').data;
const treeData = require('./TreeData');
const tree = treeData.init(data);

require('../css/TreeGrid');
ReactDOM.render(
  <TreeGrid header={headers} itemName={itemName} treeViewWidth={250} tree={tree}/>
  ,document.getElementById('app')
);

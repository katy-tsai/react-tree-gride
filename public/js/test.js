
var data = require('./data').data;
var treeData = require('./TreeData');

var tree = treeData.init(data);
console.log(tree._root.children);

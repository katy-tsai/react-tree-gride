
var data = require('./data').data;
var treeData = require('./TreeData');
const _ = require('lodash');
var tree = treeData.init(data);
console.log(tree._root.children[0]);

// var childArray = _.sortBy(_.filter(data,{parent:1}),'order');
//
// console.log(childArray);
//
// var childArray = _.sortBy(_.filter(data,{parent:2}),'order');
//
// console.log(childArray);

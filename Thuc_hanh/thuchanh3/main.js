"use strict";
exports.__esModule = true;
var product_1 = require("./product");
var productManage_1 = require("./productManage");
var laptop = new product_1.Product('laptop', 2000);
var iphone = new product_1.Product('iphone', 5000);
var productManage = new productManage_1.ProductManage();
productManage.add = laptop;
productManage.add = iphone;
console.log(productManage.getAll);
import {Product} from "./product";
import {ProductManage} from "./productManage";

let laptop = new Product('laptop', 2000);
let iphone = new Product('iphone', 5000);

let productManage = new ProductManage()
productManage.add = laptop
productManage.add = iphone

console.log(productManage.getAll)
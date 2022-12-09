"use strict";
exports.__esModule = true;
exports.ProductManage = void 0;
var ProductManage = /** @class */ (function () {
    function ProductManage() {
        this.product = [];
    }
    Object.defineProperty(ProductManage.prototype, "getAll", {
        get: function () {
            return this.product;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ProductManage.prototype, "add", {
        set: function (product) {
            this.product.push(product);
        },
        enumerable: false,
        configurable: true
    });
    return ProductManage;
}());
exports.ProductManage = ProductManage;

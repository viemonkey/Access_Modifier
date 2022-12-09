export class ProductManage {
    private product = [];

    constructor() {
    }
    get getAll() {
        return this.product
    }

    set add(product) {
        this.product.push(product);
    }
}
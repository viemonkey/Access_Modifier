export class Product {
    private _name: string;
    private _price: number;


    constructor(name: string, price: number) {
        this._name = name;
        this._price = price;
    }

    getname(): string {
        return this._name;
    }

    setname(value: string) {
        this._name = value;
    }

    getprice(): number {
        return this._price;
    }

    setprice(value: number) {
        this._price = value;
    }
}


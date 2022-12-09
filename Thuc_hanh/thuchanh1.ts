class Application {
    private _name: string;
    static count: number = 0;

    constructor(name: string) {
        this._name = name;
        Application.count++;
    }
}

console.log(Application.count);
let app1 = new Application('App one');
console.log(Application.count);
let app2 = new Application('App two');
console.log(Application.count);
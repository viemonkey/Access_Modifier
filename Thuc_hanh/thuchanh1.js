var Application = /** @class */ (function () {
    function Application(name) {
        this._name = name;
        Application.count++;
    }
    Application.count = 0;
    return Application;
}());
console.log(Application.count);
var app1 = new Application('App one');
console.log(Application.count);
var app2 = new Application('App two');
console.log(Application.count);

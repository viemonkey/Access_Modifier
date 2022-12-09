"use strict";
exports.__esModule = true;
exports.User = exports.Role = void 0;
var Role;
(function (Role) {
    Role[Role["admin"] = 1] = "admin";
    Role[Role["user"] = 2] = "user";
})(Role = exports.Role || (exports.Role = {}));
var User = /** @class */ (function () {
    function User(name, email, role) {
        this._name = name;
        this._email = email;
        this._role = role;
    }
    User.prototype.getname = function () {
        return this._name;
    };
    User.prototype.setname = function (value) {
        this._name = value;
    };
    User.prototype.getemail = function () {
        return this._email;
    };
    User.prototype.setemail = function (value) {
        this._email = value;
    };
    User.prototype.getrole = function () {
        return this._role;
    };
    User.prototype.setrole = function (value) {
        this._role = value;
    };
    return User;
}());
exports.User = User;

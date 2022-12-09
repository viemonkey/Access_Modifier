"use strict";
exports.__esModule = true;
exports.UserManage = void 0;
var User_1 = require("./User");
var UserManage = /** @class */ (function () {
    function UserManage() {
        this.user = [];
    }
    UserManage.prototype.getInFfo = function () {
        return this.user;
    };
    UserManage.prototype.IsAdmin = function () {
        for (var i = 0; i < this.user.length; i++) {
            if (this.user[i].getrole() == User_1.Role.user) {
                console.log("la nguoi dung binh thuong");
            }
            else {
                console.log('la admin');
            }
        }
    };
    UserManage.prototype.add = function (user) {
        this.user.push(user);
    };
    return UserManage;
}());
exports.UserManage = UserManage;

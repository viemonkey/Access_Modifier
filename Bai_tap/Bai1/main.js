"use strict";
exports.__esModule = true;
var User_1 = require("./User");
var UserManage_1 = require("./UserManage");
var usermanager = new UserManage_1.UserManage();
var user = new User_1.User('hi', 'hello', User_1.Role.user);
usermanager.add(user);
usermanager.IsAdmin();

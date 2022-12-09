"use strict";
exports.__esModule = true;
exports.Employee = void 0;
var Employee = /** @class */ (function () {
    function Employee(id, firstName, lastName, dateBirth, address, jobPosition) {
        this._id = id;
        this._firstName = firstName;
        this._lastName = lastName;
        this._dateBirth = dateBirth;
        this._address = address;
        this._jobPosition = jobPosition;
    }
    Employee.prototype.getid = function () {
        return this._id;
    };
    Employee.prototype.setid = function (value) {
        this._id = value;
    };
    Employee.prototype.getfirstName = function () {
        return this._firstName;
    };
    Employee.prototype.setfirstName = function (value) {
        this._firstName = value;
    };
    Employee.prototype.getlastName = function () {
        return this._lastName;
    };
    Employee.prototype.setlastName = function (value) {
        this._lastName = value;
    };
    Employee.prototype.getdateBirth = function () {
        return this._dateBirth;
    };
    Employee.prototype.setdateBirth = function (value) {
        this._dateBirth = value;
    };
    Employee.prototype.getaddress = function () {
        return this._address;
    };
    Employee.prototype.setaddress = function (value) {
        this._address = value;
    };
    Employee.prototype.getjobPosition = function () {
        return this._jobPosition;
    };
    Employee.prototype.setjobPosition = function (value) {
        this._jobPosition = value;
    };
    return Employee;
}());
exports.Employee = Employee;

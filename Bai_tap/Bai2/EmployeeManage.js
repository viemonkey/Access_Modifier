"use strict";
exports.__esModule = true;
exports.EmployeeManage = void 0;
var EmployeeManage = /** @class */ (function () {
    function EmployeeManage() {
        this.listEmployee = [];
    }
    EmployeeManage.prototype.add = function (t) {
        this.listEmployee.push(t);
    };
    EmployeeManage.prototype.display = function () {
        return this.listEmployee;
    };
    EmployeeManage.prototype.edit = function (id, t) {
        var index = this.findById(id);
        if (index === -1) {
            console.log("----------khong co id nay----------");
        }
        else {
            this.listEmployee[index] = t;
            console.log("----------Sua thanh cong----------");
        }
    };
    EmployeeManage.prototype.detail = function (id) {
        var index = this.findById(+id);
        var employee = this.listEmployee[index];
        console.log(employee);
    };
    EmployeeManage.prototype["delete"] = function (id) {
        var index = this.findById(+id);
        if (index === -1) {
            console.log("----------khong co id nay----------");
        }
        else {
            this.listEmployee.splice(index, 1);
            console.log('----------xoa thanh cong----------');
        }
    };
    EmployeeManage.prototype.findById = function (id) {
        for (var i = 0; i < this.listEmployee.length; i++) {
            if (id === this.listEmployee[i].getid()) {
                return i;
            }
        }
        return -1;
    };
    return EmployeeManage;
}());
exports.EmployeeManage = EmployeeManage;

"use strict";
exports.__esModule = true;
var EmployeeManage_1 = require("./EmployeeManage");
var Employee_1 = require("./Employee");
var input = require("readline-sync");
var employeeManage = new EmployeeManage_1.EmployeeManage();
function main() {
    var menu = "\n    1. Hien thi danh sach nhan su\n    2. Them nhan su moi\n    3. Xem chi tiet nhan su\n    4. Xoa mot nhan su\n    5. Chinh sua thong tin nhan su\n    0. Thoat\n    ";
    var choice = -1;
    do {
        console.log(menu);
        choice = +input.question("Enter Choice: ");
        switch (choice) {
            case 1:
                employeeDisplay();
                break;
            case 2:
                employeeAdd();
                break;
            case 3:
                employeeDetail();
                break;
            case 4:
                employeeDelete();
                break;
            case 5:
                employeeEdit();
                break;
            case 0:
                break;
        }
    } while (choice !== 0);
    function employeeAdd() {
        var id = +input.question("Nhap id: ");
        var firstName = input.question("Nhap ho: ");
        var lastName = input.question("Nhap ten: ");
        var dateBirth = +input.question("Nhap ngay sinh: ");
        var address = input.question("Nhap dia chi: ");
        var jobPosition = input.question("Nhap vi tri cong viec: ");
        var employee = new Employee_1.Employee(id, firstName, lastName, dateBirth, address, jobPosition);
        employeeManage.add(employee);
    }
    function employeeEdit() {
        var idEdit = +input.question("Nhap id muon sua: ");
        var id = +input.question("Nhap id: ");
        var firstName = input.question("Nhap ho: ");
        var lastName = input.question("Nhap ten: ");
        var dateBirth = +input.question("Nhap ngay sinh: ");
        var address = input.question("Nhap dia chi: ");
        var jobPosition = input.question("Nhap vi tri cong viec: ");
        var employee = new Employee_1.Employee(id, firstName, lastName, dateBirth, address, jobPosition);
        employeeManage.edit(idEdit, employee);
    }
    function employeeDisplay() {
        console.table(employeeManage.display());
    }
    function employeeDelete() {
        var idDelete = +input.question("Nhap id muon xoa: ");
        employeeManage["delete"](idDelete);
    }
    function employeeDetail() {
        var idDetail = +input.question("Nhap id muon hien thi: ");
        employeeManage.detail(idDetail);
    }
}
main();

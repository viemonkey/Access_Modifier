import {EmployeeManage} from "./EmployeeManage";
import {Employee} from "./Employee";

let input = require("readline-sync");
let employeeManage = new EmployeeManage()


function main() {
    let menu = `
    1. Hien thi danh sach nhan su
    2. Them nhan su moi
    3. Xem chi tiet nhan su
    4. Xoa mot nhan su
    5. Chinh sua thong tin nhan su
    0. Thoat
    `
    let choice = -1;
    do {
        console.log(menu)
        choice = +input.question("Enter Choice: ")
        switch (choice) {
            case 1:
                employeeDisplay()
                break;
            case 2:
                employeeAdd()
                break;
            case 3:
                employeeDetail()
                break;
            case 4:
                employeeDelete()
                break;
            case 5:
                employeeEdit()
                break;
            case 0:
                break;
        }
    } while (choice !== 0)


    function employeeAdd() {
        let id = +input.question("Nhap id: ");
        let firstName = input.question("Nhap ho: ");
        let lastName = input.question("Nhap ten: ");
        let dateBirth = +input.question("Nhap ngay sinh: ");
        let address = input.question("Nhap dia chi: ");
        let jobPosition = input.question("Nhap vi tri cong viec: ");

        let employee: Employee = new Employee(id, firstName, lastName, dateBirth, address, jobPosition);
        employeeManage.add(employee)
    }

    function employeeEdit() {
        let idEdit = +input.question("Nhap id muon sua: ")
        let id = +input.question("Nhap id: ");
        let firstName = input.question("Nhap ho: ");
        let lastName = input.question("Nhap ten: ");
        let dateBirth = +input.question("Nhap ngay sinh: ");
        let address = input.question("Nhap dia chi: ");
        let jobPosition = input.question("Nhap vi tri cong viec: ");

        let employee: Employee = new Employee(id, firstName, lastName, dateBirth, address, jobPosition);
        employeeManage.edit(idEdit, employee)
    }

    function employeeDisplay() {
        console.table(employeeManage.display())
    }

    function employeeDelete() {
        let idDelete = +input.question("Nhap id muon xoa: ")
        employeeManage.delete(idDelete)

    }

    function employeeDetail() {
        let idDetail = +input.question("Nhap id muon hien thi: ")
        employeeManage.detail(idDetail)
    }

}

main()


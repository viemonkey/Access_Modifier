import {Employee} from "./Employee";

export class EmployeeManage {
    listEmployee: Employee[] = [];

    add(t: Employee): void {
        this.listEmployee.push(t)
    }
    display(): Employee[] {
        return this.listEmployee
    }
    edit(id: number, t: Employee) {
        let index = this.findById(id);
            if (index === -1) {
                console.log("----------khong co id nay----------")
            } else {
                this.listEmployee[index] = t
                console.log("----------Sua thanh cong----------")
            }
    }
    detail(id: number){
        let index = this.findById(+id);
        let employee = this.listEmployee[index];
        console.log(employee)
    }
    delete(id: number) {
        let index = this.findById(+id);
            if (index === -1) {
                console.log("----------khong co id nay----------")
            } else {
                this.listEmployee.splice(index, 1);
                console.log('----------xoa thanh cong----------')
            }
    }
    findById(id: number) {
        for (let i = 0; i < this.listEmployee.length; i++) {
            if (id === this.listEmployee[i].getid()) {
                return i;
            }
        }
        return -1;
    }
}
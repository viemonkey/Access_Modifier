import {Role, User} from "./User"

export class UserManage {
    private user = [];

    constructor() {
    }

    getInFfo() {
        return this.user;
    }
    IsAdmin(){
        for (let i = 0; i< this.user.length; i++) {
            if ( this.user[i].getrole() == Role.user) {
                console.log(`la nguoi dung binh thuong`)
            }else {
                console.log('la admin')
            }
        }
    }
    add(user:User){
        this.user.push(user)
    }

}


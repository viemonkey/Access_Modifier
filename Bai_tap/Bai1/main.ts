import {Role, User} from "./User";
import {UserManage} from "./UserManage";

let usermanager = new UserManage()
let user = new User('hi', 'hello', Role.user);
usermanager.add(user);
usermanager.IsAdmin()
export enum Role {
    admin = 1,
    user
}

export class User {
    private _name: string;
    private _email: string;
    private _role: Role;


    constructor(name: string, email: string, role: Role) {
        this._name = name;
        this._email = email;
        this._role = role;
    }

    getname(): string {
        return this._name;
    }

    setname(value: string) {
        this._name = value;
    }

    getemail(): string {
        return this._email;
    }

    setemail(value: string) {
        this._email = value;
    }

    getrole(): Role {
        return this._role;
    }

    setrole(value: Role) {
        this._role = value;
    }
}
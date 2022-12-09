export class Employee {
    private _id: number;
    private _firstName: string;
    private _lastName: string;
    private _dateBirth: number;
    private _address: string;
    private _jobPosition: string;


    constructor(id: number, firstName: string, lastName: string, dateBirth: number, address: string, jobPosition: string) {
        this._id = id;
        this._firstName = firstName;
        this._lastName = lastName;
        this._dateBirth = dateBirth;
        this._address = address;
        this._jobPosition = jobPosition;
    }

    getid(): number {
        return this._id;
    }

    setid(value: number) {
        this._id = value;
    }

    getfirstName(): string {
        return this._firstName;
    }

    setfirstName(value: string) {
        this._firstName = value;
    }

    getlastName(): string {
        return this._lastName;
    }

    setlastName(value: string) {
        this._lastName = value;
    }

    getdateBirth(): number {
        return this._dateBirth;
    }

    setdateBirth(value: number) {
        this._dateBirth = value;
    }

    getaddress(): string {
        return this._address;
    }

    setaddress(value: string) {
        this._address = value;
    }

    getjobPosition(): string {
        return this._jobPosition;
    }

    setjobPosition(value: string) {
        this._jobPosition = value;
    }
}
class UserModel {
    private _userName: string = "";
    private _role: string = "";
    private _firstName: string = "";
    private _lastName: string = "";
    private _gender: string = "";
    private _email: string = "";
    private _address: string = "";
    private _dob: string = "";

    public get firstName(): string {
        return this._firstName;
    }
    public set firstName(value: string) {
        this._firstName = value;
    }
    
    public get lastName(): string {
        return this._lastName;
    }
    public set lastName(value: string) {
        this._lastName = value;
    }

    public get gender(): string {
        return this._gender;
    }
    public set gender(value: string) {
        this._gender = value;
    }
    
    public get email(): string {
        return this._email;
    }
    public set email(value: string) {
        this._email = value;
    }
    
    public get address(): string {
        return this._address;
    }
    public set address(value: string) {
        this._address = value;
    }
    
    public get dob(): string {
        return this._dob;
    }
    public set dob(value: string) {
        this._dob = value;
    }

    
    get userName() : string {
        return this._userName;
    }

    set userName(value : string) {
        this._userName = value;
    }

    get role(): string {
        return this._role;
    }
    set role(value: string) {
        this._role = value;
    }
}

export default UserModel;
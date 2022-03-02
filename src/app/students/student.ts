export class Student {
    private _id: number = 0;
    private _name: string;
    private _grade: number = 0;

    constructor(id:number, name: string, grade: number){

    }

    get id(): number{
        return this._id;
    }
    set id(value: number){
    this._id = value
    }

    get name(): string{
        return this._name;
    }

    set name(value: string){
        this._name = value
    }
    get grade(): number{
        return this._grade;
    }
    set grade(value: number){
    this._grade = value
    }
}

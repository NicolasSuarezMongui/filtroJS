export default class Camper{
    constructor(id, fullname, phone, email, campusGroup, campCoins){
        this._id = id;
        this._fullname = fullname;
        this._phone = phone;
        this._email = email;
        this._campusGroup = campusGroup;
        this._campCoins = campCoins;
    }

    get id(){
        return this._id;
    }
    get fullname(){
        return this._fullname;
    }
    get phone(){
        return this._phone;
    }
    get email(){
        return this._email;
    }
    get campusGroup(){
        return this._campusGroup;
    }
    get campCoins(){
        return this._campCoins;
    }
    set fullname(name){
        this._fullname = name;
    }
    set phone(phone){
        this._phone = phone;
    }
    set email(email){
        this._email = email;
    }
    set campusGroup(campusGroup){
        this._campusGroup = campusGroup;
    }
    sumCoins(campCoins){
        this._campCoins += campCoins;
    }
    resCoins(campCoins){
        this._campCoins -= campCoins;
    }
}

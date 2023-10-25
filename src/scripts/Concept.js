export default class Concept {
    constructor(id, description,coins,type){
        this._id = id;
        this._description = description;
        this._type = type
        this._coins = coins;
    } 

    get id(){
        return this._id;
    }
    get description(){
        return this._description;
    }
    get type(){
        return this._type;
    }
    get coins(){
        return this._coins;
    }

    set description(description){
        this._description = description;
    }
    set coins(coins){
        this._coins = coins;
    }
    set type(type){
        this._type = type;
    }
}
import Camper from "./Camper.js";

export class ControllerCampers {
    constructor(){
        this._campers = [];
    }
    get campers(){
        return this._campers;
    }
    set campers(campers){
        this._campers = campers;
    }
    addCamper(camper){
        this._campers.push(camper);
    }
    removeCamper(camper){
        this._campers.splice(this._campers.indexOf(camper), 1);
    }
    updateCamper(camper){
        let index = this._campers.indexOf(camper);
        this._campers[index] = camper;
    }
    getCamper(id){
        return this._campers.find(camper => camper._id === id);
    }
    addCampCoin(id,campCoins){
        let camper = this.getCamper(id);
        let res = parseInt(camper._campCoins);
        camper._campCoins = res + campCoins
    }
    resCampCoin(id,campCoins){
        let camper = this.getCamper(id);
        camper.resCoins(campCoins)
    }

    transform(user){
        return new Camper(user._id,user._fullname,user._phone,user._email,user._campusGroup,user._campCoins)
    }
}
export class ControllerConcepts{
    constructor(){
        this.concepts = []
    }
    addConcept(concept){
        this.concepts.push(concept)
    }
    getConcept(id){
        return this.concepts.find(concept => concept._id === id)
    }
    removeConcept(id){
        this.concepts = this.concepts.filter(concept => concept._id!== id)
    }
    getConcepts(){
        return this.concepts
    }
    setConcepts(concepts){
        this.concepts = concepts
    }
    getSumTypes(){
        return this.concepts.filter(concept => concept._type === 'sum');
    }
    getResTypes(){
        return this.concepts.filter(concept => concept._type ==='res');
    }

    getTotalConcepts() {
        return this.concepts.length
    }
}
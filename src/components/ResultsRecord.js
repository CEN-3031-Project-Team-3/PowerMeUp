class ResultsRecord {
    constructor() {
        this.data = [];
    }

    set(input){
        this.data.push(input);
        
    }

    show(){
        console.log(this.data.at(-1))
    }

    getData() {
        return this.data.at(-1)
    }
}

const results_record = new ResultsRecord()
Object.freeze(results_record)
export default results_record
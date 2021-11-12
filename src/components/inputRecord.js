class inputRecord {
    constructor() {
        this.data = [];
    }

    add(input){
        this.data.push(input)
        
    }

    show(){
        console.log(this.data)
    }

    getData() {
        return this.data
    }
}

const record = new inputRecord()
Object.freeze(record)
export default record
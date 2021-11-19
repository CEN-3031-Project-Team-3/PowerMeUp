class inputRecord {
    constructor() {
        this.data = [];
        this.dictionary = {};
    }

    add(input){
        this.data.push(input)
        this.dictionary[input.toString().toLowerCase()] = appliancesDictionary[input.toString().toLowerCase()];
    }

    show(){
        console.log(this.data)
        console.log(this.dictionary)
    }

    getData() {
        return this.data
    }

    computeEnergyUsage() {
        var temp = 0;
        for(const [key, val] of Object.entries(this.dictionary)) {
            temp += val;
        }
        return temp;
    }
}

var appliancesDictionary = {
    "55 inch led tv": 23,
    "chromebook": 10,
    "clothes dryer": 800,
    "coffee maker": 280,
    "desktop computer": 90,
    "dishwasher": 300,
    "bluray player": 10,
    "electric shaver": 4,
    "hair blow dryer": 500,
    "home sound system": 19,
    "humidifier": 8,
    "laptop computer": 20,
    "microwave": 340,
    "oven": 430,
    "playstation 4": 18,
    "playstation 5": 40,
    "pressure washer": 300,
    "refrigerator": 40,
    "space heater": 1000,
    "toaster": 360,
    "vacuum cleaner": 180,
    "washing machine": 100,
    "window air conditioner": 300,
    "xbox one": 22,
    "xbox series x": 40,
    "electric toothbrush": 2
  };

const record = new inputRecord()
Object.freeze(record)
export default record

class inputRecord {
  constructor() {
    this.data = [];
    this.dictionary = {};
  }

  add(input) {
    this.data.push(input);
  }

  show() {
    console.log(this.data);
    console.log(this.dictionary);
  }

  getData() {
    return this.data;
  }

  getDictionary() {
    return this.dictionary;
  }

  createDictionary() {
    for (let i = 0; i < this.data.length; i++) {
      this.dictionary[this.data[i]] = appliancesDictionary[this.data[i].toString().toLowerCase()];
    }
  }
  computeUsageScore() {
    var score = 0;
    for (const [key, value] of Object.entries(this.dictionary)) {
      score += value;
    }
    return score;
  }
}

const record = new inputRecord();
Object.freeze(record);
export default record;

var appliancesDictionary = {
  "55 inch led tv": 23,
  "chromebook": 10,
  "clothes dryer": 800,
  "coffee maker": 280,
  "desktop computer": 90,
  "dishwasher": 300,
  "blu ray player": 10,
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

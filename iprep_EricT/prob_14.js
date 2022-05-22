// Probelm 14
// describe call() and apply() methods

// how do they function?
// what arguments do they take?
// how are they different?

// object nextGen
const nextGen = {
  // property version
  version: 'NCC1701D',
  // method getShipDescription
  getShipDescription: function(year, captain, speed) {
    console.log(`This ship is ${this.version}. This ship was launched in ${year}. It was piloted by ${captain}. The ship was able to reach max speed of ${speed}. \n`);
  }
};

const original = {
  version: 'NCC1701'
};

const enterprise = {
  version: 'NX01'
};

nextGen.getShipDescription(2245, 'Jean-Luc Picard', 'Warp 9');
nextGen.getShipDescription.apply(original, [2245, 'James Kirk', 'Warp 8']); // accepts arguments in an array
nextGen.getShipDescription.call(enterprise, 2151, 'Henry Archer', 'Warp 5');

// Problem 21
// describe bind() method
// 1. describe how it works
// 2. explain parameters it takes
// 3. code out an example

let developer = {
  name: 'Developer',
  develop: function(language) {
    console.log(this.name + ' codes in ' + language);
  }
};

let designer = {
  name: 'Designer',
  design: function(program) {
    console.log(this.name + ' designs in ' + program);
  }
};

let develop = developer.develop.bind(designer, 'JavaScript');
develop();

class User {
  constructor(name) {
    this.name = name;
  }
  sayName() {
    console.log(this.name);
  }
}


function User(name) {
  this.name = name;
}
User.prototype.sayName = function() {
  console.log(this.name);
};


// let user = new User("John");
// user.sayName();
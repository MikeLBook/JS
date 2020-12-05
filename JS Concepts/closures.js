const counterCreator = () => {
    let _count = 0;
    return () => {
        console.log(_count);
        _count++;
    }
};

const counter = counterCreator();

counter(); // 0
counter(); // 1
console.log(counter._count); // undefined, count is private

// counter is a closure. It has access to the count variable and is able to increment it, but no other part of the program can access the count variable
// this closure is a function that is returned by another function so as to not be accessible to the global scope. 
// another example would be callbacks capturing a variable 
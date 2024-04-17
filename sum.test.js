// const sum = require("./sum")
const myFunction = require("./sum")

// test('adds 1+2 to equal 3',()=>{
//   expect (sum(1,2)).toBe(3);  
// });

/*
toEqual
test('object assignment',()=>{
   const data = { one: 1};
   data['two'] = 2;
   expect(data).toEqual({one:1, two:2 })

toBeFalsy
 test('null is falsy',()=>{
    const n = null;
    expect(n).toBeFalsy();
 })  

 toBeTruthy
 test('one is truthy',()=>{
    const n = 1;
    expect(n).toBeTruthy();
 }) 
toThrow
test('throws on invalid input',()=>{
    expect(()=>{
    myFunction(invalidInput)    
    }).toThrow();
})


*/

test('throws on invalid input',()=>{
    expect(()=>{
        myFunction("ghjk")
    }).toThrow();
})

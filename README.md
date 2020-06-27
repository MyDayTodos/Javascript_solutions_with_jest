# Solutions to Coding Problems in Javascript with JEST
A collection of solutions to coding problems in Javascript accompanied with some unit testing using JEST. 

### Project setup
After you clone the project navigate to the project's home directory and run
```
npm install
```
### Testing the code
From the project's home directory, run
```
npm run test
```

## To add new solutions 
Add a new Javascript function to indexMath.js and make sure you add it as a property to the module.exports object too e.g. 
```
function newProblem() {
	//your code to solve it here
}
module.exports = {
	indexMatch: indexMatch,
	newProblem: newProblem
};
```
The reason to add it to the module export is so you can test it using JEST e.g. 
```
test("Write a test for the new problem", () => {
    //this could be some test RE
    expect(indexMatchModule.newProblem("")).toBe(false);
});
```
Or you can just create a new Javascript file e.g. newProblem.js followed by a corresponding test file e.g. newProblem.test.js and write your code there.

# Summary
Hope you find this project useful, checkout, have a play with it and it would be great if you can contribute any new code to it.

I share more coding solutions on [my blog at My Day To-Do], so make sure you check it out that blog.

[my blog at My Day To-Do]: <https://mydaytodo.com/category/javascript/>
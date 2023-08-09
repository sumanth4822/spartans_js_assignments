//WHAT IS A CALLBACK FUNCTION?

        //WHEN A function is passed as a parameter to another function.IT can run after another function has finished running.
        //JavaScript functions are executed in the sequence they are called.
//example:
function name(parameter){
    parameter();//parameter acts as callback funciton
}

//example 2:

function callBack(cb){
    cb("hello")
}

callBack(value => console.log(value));

//example 3:

const names = ["lakshmikant","manoj","vikash","rakshith","deepak"]

// names.forEach((name) => console.log(name))

const namesEl = (arr,cb) => {
    for(let i = 0; i<arr.length; i++){
        const element = arr[i];
        cb(element)
    }
}

namesEl(names,(name) =>{
    console.log(name)
})

//example 4:
function taskone(){
    console.log("task 1")
}
function tasktwo(){
    console.log("task 2");
}

setTimeout(taskone,2000);

tasktwo();
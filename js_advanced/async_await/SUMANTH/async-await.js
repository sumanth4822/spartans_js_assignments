// async function myFunction(){
//     return "Hello..."
// }

// myFunction().then( (value) =>{
//     console.log("success");
//     console.log(value);
// });

let promise = new Promise(function(resolve,reject) {
    setTimeout(() => {
        resolve("WELCOME")
    }, 2000);
})

async function myFunction(){
    let result = await promise;
    console.log(result)
    console.log("success");
}

myFunction();


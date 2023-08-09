let result = false;
let myPromise = new Promise((resolve, reject ) => {
    if(result == true){
        resolve();
    } else{
        reject();
    }
})
myPromise.then(() => {
    console.log("success");  
},
() => {
    console.log("failure"); 
},)
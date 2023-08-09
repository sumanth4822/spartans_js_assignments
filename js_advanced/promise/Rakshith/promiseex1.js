let result = true;
let myPromise = new Promise((resolve, reject) => {
    if(result == true){
        resolve();
    }else{
        reject();
    }
})
myPromise.then(() => {
    console.log("resolved");
},
    () => {
        console.log("rejected");
        
    })
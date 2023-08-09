//WHAT IS PROMISE? WHY PROMISE? 
    //In JavaScript, a promise represents the eventual completion / failure of an asynchronous operation.
    // It is used to handle asynchronous code in a more organized and manageable way, making it easier to write and reason about asynchronous tasks. 



//A Promise is in one of these states:

//pending: initial state, neither fulfilled nor rejected.
//fulfilled: meaning that the operation was completed successfully.
//rejected: meaning that the operation failed.

//syntax:

let p = new Promise((resolve, reject) => {
    let a = 1+1;
    if(a == 2){
        resolve('Success')
    }else{
        reject('Failure')
    }
})

//Promise Methods:
//.then() - The then() method of Promise instances takes up to two arguments: callback functions for the fulfilled and rejected cases of the Promise.
//syntax - .then(onfulfilled,onrejected)

//Using the above example:
p.then((message) => {
    console.log("this is in then - "+ message);
}).catch((message) =>{
    console.log("this is in catch - "+message);
})

//example 2:
const userleft = false;
const watchingMusicVideo = true;

function WatchvideoPromise(){
   return new Promise((resolve,reject) =>{
    if(userleft){
        reject(
            {      
                name : "USER LEFT",
                message : ":("
            }
        )
    }else if(watchingMusicVideo){
        reject(
            {
                name : "Watching music video",
                message : "Like My Video"
            }
            )
    }else{
        resolve("SUBSCRIBE TO MY CHANNEL")
    }
   })
}

WatchvideoPromise().then((message) =>{
    console.log("SUCCESS : "+message);
}).catch((error) =>{
    console.log(error.name + ":" +error.message)
});

//example 3:
const videoOneRecording = true;
const videoTwoRecording = true;
const videoThreeRecording = true;


const VideoOne = new Promise((resolve,reject) =>{
    if(videoOneRecording){
    resolve("VIDEO 1 RECORDED")
    }else{
    reject("VIDEO 1 NOT RECORDED")

    }
})
const VideoTwo = new Promise((resolve,reject) =>{
    if(videoTwoRecording){
        resolve("VIDEO 2 RECORDED")
        }else{
        reject("VIDEO 2 NOT RECORDED")
    
        }
})
const VideoOThree = new Promise((resolve,reject) =>{
    if(videoThreeRecording){
        resolve("VIDEO 3 RECORDED")
        }else{
        reject("VIDEO 3 NOT RECORDED")
    
        }
})

//.all() - The Promise.all() static method takes an iterable of promises as input and returns a single Promise.
           //This returned promise fulfills when all of the input's promises fulfill (including when an empty iterable is passed), with an array of the fulfillment values. 
           //It rejects when any of the input's promises rejects, with this first rejection reason
Promise.all(
    [VideoOne,VideoTwo,VideoOThree]
).then((message) =>{
    console.log(message);
});

//.race() - takes an iterable of promises as input and returns a single Promise. This returned promise settles with the eventual state of the first promise that settles.
// it "races" multiple promises against each other and returns the result of the first promise that settles (either resolves or rejects).
Promise.race(
    [VideoOne,VideoTwo,VideoOThree]
).then((message) =>{
    console.log(message);
});


//.finally() - The finally() method of Promise instances schedules a function to be called when the promise is settled (either fulfilled or rejected).
                // It immediately returns an equivalent Promise object, allowing you to chain calls to other promise methods.
                //This lets you avoid duplicating code in both the promise's then() and catch() handlers.

let isLoading = true;

function data(){
    return new Promise((resolve,reject) =>{
        setTimeout(() => resolve("WINDOW LOADED!"),2000);
    })
}

function website(){
    console.log("Website is Loading : "+isLoading);
}

data()
.then(response => console.log(response))
.catch(error => console.log(error))
.finally(() =>{
    isLoading = false;
    console.log("Website is Loading : "+isLoading);
})
 website();
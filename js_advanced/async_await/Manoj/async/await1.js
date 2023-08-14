//example 1

// async function myDisplay(){
//     let mypromise = new Promise((resolve, reject) => {
//         let result = true;
//         if(result == true){
//             resolve();
//         } else {
//             reject();
//         }
//     });
//     return mypromise;
// }

// myDisplay().then(() => {
//     console.log("success");
// },
// () => {
//     console.log("failure");
// })

//------------------------------------------------------------------------
//example2

// function resolveAfter2Seconds() {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         resolve('resolved');
//       }, 2000);
//     });
//   }
  
//   async function asyncCall() {
//     console.log('calling');
//     const result = await resolveAfter2Seconds();
//     console.log(result);
//     // Expected output: "resolved"
//   }
  
//   asyncCall();

//------------------------------------------------------------------------------------------
//example 3

//   async function myFunction() {
//     return "Thank God class is over";
//   }
//   myFunction().then((value) => {
//     console.loga("success");
//     console.log(value);
//   })

//--------------------------------------------------------------------------------
//example 4

let promise = new Promise(function(resolve, reject){
    setTimeout(() => {
        resolve("Hello")
    }, 3000)
})

async function myFunction(){
    let result = await promise;
    console.log(result);
    console.log("success");
}
myFunction();
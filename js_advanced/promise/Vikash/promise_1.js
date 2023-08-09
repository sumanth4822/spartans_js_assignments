let result = false;
let myPromise = new Promise((resolve, reject) => {
  if (result == true) {
    resolve();
  } else {
    reject();
  }
});

myPromise.then(
  () => {
    console.log("Success");
  },
  () => {
    console.log("Failure");
  }
);

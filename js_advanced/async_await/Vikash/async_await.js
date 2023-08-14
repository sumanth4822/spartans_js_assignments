let myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise Resolved");
  }, 2000);
  console.log("Fetching Data....");
});

async function myFunction() {
  try {
    let result = await myPromise;
    console.log(result);
  } catch {
    console.log(error);
  }
}

myFunction();

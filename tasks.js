//task 01
const iterateWithAsyncAwait = async (values) => {
  for (let value of values) {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(value);
  }
};
// iterateWithAsyncAwait([1, 2, 3, 4, 5]);

//task 02
const awaitCall = async () => {
  const mockAPIResponse = await simulateFetchAPI();
  console.log("Data received:", mockAPIResponse);
};

async function simulateFetchAPI() {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ message: "Fetched Data" }));
  });
}
//awaitCall();

//task 03
async function awaitCallWithErrorHandling() {
  try {
    const mockAPIResponse = await simulateFetchAPIWithError();
    console.log("Data received:", mockAPIResponse);
  } catch (error) {
    console.error("Failed to fetch data. Please try again later.");
  }
}

async function simulateFetchAPIWithError() {
  return new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error("API error"))); // Simulate API failure
  });
}
// awaitCallWithErrorHandling();

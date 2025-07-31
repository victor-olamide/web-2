//callback

function fetchUserNameCallback(callback) {
  setTimeout(() => {
    callback("Victor");
  }, 3000); // Simulate 3 second delay
}

// Usage
fetchUserNameCallback((name) => {
  console.log("Callback:", name);
});

//promise
function fetchUserNamePromise() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Victor");
    }, 3000); // Simulate 3 second delay
  });
}
// Usage
fetchUserNamePromise().then((name) => {
  console.log("Promise:", name);
}

//async/await
async function fetchUserNameAsync() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Victor");
    }, 3000); // Simulate 3 second delay
  });
}

// Usage
(async () => {
  const name = await fetchUserNameAsync();
  console.log("Async/Await:", name);
})();

//Fetch two users’ data in parallel using Promise.all and Async/Await
async function fetchUsersData() {
  const user1 = fetchUserNameAsync();
  const user2 = fetchUserNameAsync();

  const [name1, name2] = await Promise.all([user1, user2]);
  console.log("Async/Await - User 1:", name1);
  console.log("Async/Await - User 2:", name2);
}

// Usage
fetchUsersData();
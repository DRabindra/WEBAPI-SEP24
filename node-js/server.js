// serve.js

// Main function that logs "hello world"
//function main() {
    //console.log("hello world");
//}

// Call the main function to execute it
//main();


// serve.js

const endpoint = require('./endpoint'); // Import the endpoint function

function main() {
    console.log("hello world");
    console.log(endpoint()); // Call the endpoint function and log its return value
}

main();
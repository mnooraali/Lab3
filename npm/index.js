const axios = require("axios");

axios.get("https://jsonplaceholder.typicode.com/posts").then(
    result => console.log(result.data)
)
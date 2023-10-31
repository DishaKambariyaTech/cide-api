const dotenv = require("dotenv").config();

const app = require("./app");
const port = process.env.PORT;
const user = process.env.TEST_USER;

app.listen(port, () => {
  console.log("Server listening on port::" + `${port}`);
  console.log("Running user::" + `${user}`);
});

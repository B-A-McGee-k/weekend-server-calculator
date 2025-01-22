const express = require('express');
const app = express();
let PORT = process.env.PORT || 5001;

app.use(express.json());
app.use(express.static('server/public'));

function calculator(event) {
  calculations.forEach(calculation => {
    if (calculation.operator == '+') {
      calculation.result = calculation.numOne + calculation.numTwo
    } else if (calculation.operator == '-') {
      calculation.result = calculation.numOne - calculation.numTwo
    } else if (calculation.operator == '*') {
      calculation.result = calculation.numOne * calculation.numTwo
    } else if (calculation.operator == '/') {
      calculation.result = calculation.numOne / calculation.numTwo
    } else {
      calculation.result = "Operation was not selected, select one to perform calculation."
    }
    console.log("A solution of ", calculation.result, " was found.")
  });
}

// Global variable that will contain all of the
// calculation objects:
let calculations = [
  {
  numOne: 11,
  numTwo: 7,
  operator: '-',
  result: 4
  },
];


// Here's a wonderful place to make some routes:

// GET /calculations

// function getCalculations(event) {
//   console.log("In getCalculations function...");
//   axios
//     .get("/calculations")
//     .then((response) => {
//       console.log(
//         "got data from calculations"
//       );
      
//     })
// }


app.get('', (req, res) => {
  res.send(calculations);
});

// POST /calculations

// axios.post('/client.js', calculations)
//   .then(function (response) {
//     console.log(this.response.calculations);
//   })
//   .catch(function (error) {
//     console.error(error);
//   });    Why is the above causing my whole server to not work?

// PLEASE DO NOT MODIFY ANY CODE BELOW THESE BEARS:
// 🐻  🐻‍❄️  🧸  🐻  🐻‍❄️  🧸  🐻  🐻‍❄️  🧸  🐻  🐻‍❄️  🧸

// Makes it so you don't have to kill the server
// on 5000 in order to run the tests:
if (process.env.NODE_ENV === 'test') {
  PORT = 5002;
}

// This starts the server...but also stores it in a variable.
// This is weird. We have to do it for testing reasons. There
// is absolutely no need for you to reason about this.
const server = app.listen(PORT, () => {
  console.log('server running on: ', PORT);
});

// server.setTimeout(500)

// This is more weird "for testing reasons" code. There is
// absolutely no need for you to reason about this.
app.closeServer = () => {
  server.close();
}

app.setCalculations = (calculationsToSet) => {
  calculations = calculationsToSet;
}

module.exports = app;
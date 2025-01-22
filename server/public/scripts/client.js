console.log('client.js is sourced!');
console.log(renderToDOMHistory());
console.log(renderToDOMRecent());

app.get('/calculations', (req, res) => {
    res.json(calculations);
});

app.listen(5001, () => {
    console.log("Server listening on port!")
})


//code to put up the most recent:

function renderToDOMRecent(calculations) {
    console.log("Rendering to DOM most recent answer...");
    
    let contentDiv = 
        document.querySelector("#recentResult");

    contentDiv.innerHTML = ""

    let recent = calculations[calculations.length - 1].result

    contentDiv.innerHTML += `
    <h2>${recent}</h2>
    `;
}

//code to put up all calculations:

function renderToDOMHistory(calculations) {
    console.log("Rendering to DOM all stored calculations...");

    let contentDiv =
        document.querySelector("#resultHistory");
    
    contentDiv.innerHTML = ""

    calculations.forEach((calculation, index) => {

    contentDiv.innerHTML += `
        <ul>${calculation.numOne} ${calculation.operation} ${calculation.numTwo} = ${calculation.result}</ul>
        `;
    });

};
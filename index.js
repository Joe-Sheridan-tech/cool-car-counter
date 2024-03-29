//  initialize the count to 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count el in the html

// always use camelCase when writing variables in JavaScript 

let countEl = document.getElementById('count-el');
let saveEl = document.getElementById('save-el');
console.log(countEl);

let count = 0;

function increment() { 

    console.log("button was clicked");
    count++;
    countEl.textContent = count;
    countEl.style.color = '#433f1d';


}

function save() { 

    let countStr = count + " - ";
    saveEl.textContent += countStr;
    countEl.textContent = 0; // reset the textContent to 0
    count = 0; // reset the count variable to 0 as well or the counter will just continue from the last incremented result

}









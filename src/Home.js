import { getElementError } from "@testing-library/react";

x = [5, 4, 2, 1];
function listEverything() {
    console.log(x);
}

// search by id for content to display - in progress
const params = new URLSearchParams(window.location.search);


// generate content by button click or by id when id searched
let genData = document.querySelector('button');
genData.addEventListener('GENERATE DATA',generate);
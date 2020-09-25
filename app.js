import {
    addHandler,
    subHandler,
    multHandler,
    divHandler
} from './handlers.js';

import { grabIndex } from './utils.js';

const addButton = document.getElementById('add-button');

const subButton = document.getElementById('sub-button');

const multButton = document.getElementById('mult-button');

const divButton = document.getElementById('div-button');

const operationDropdown = document.getElementById('operation-dropdown');

// event handlers 

addButton.addEventListener('click', addHandler);

subButton.addEventListener('click', subHandler);

multButton.addEventListener('click', multHandler);

divButton.addEventListener('click', divHandler);

//

operationDropdown.onchange = grabIndex;
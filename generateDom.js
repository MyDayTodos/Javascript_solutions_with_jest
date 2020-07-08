/* A simple function to generate 4 radio buttons
to be rendered to the DOM using vanilla JS */
function radioButtons() {
    let totalElems = 4;
    const groupName = "radioGroup";
    let radioButtons = [];
    for(let idx=0; idx < totalElems; idx++) {
        let input = document.createElement("input");
        input.name = groupName;
        //+1 so we generate at least 2 radio btns
        input.value = (idx+1); 
        input.type = "radio";
        //let's set the last element to checked
        if(idx === 3) {
            input.checked = true;
        }
        radioButtons.push(input);
    }
    return radioButtons;
}

module.exports = {
    radioButtons: radioButtons
}
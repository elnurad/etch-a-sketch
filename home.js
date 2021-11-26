
//select elements
const container = document.getElementById('container');
const buttonWrap = document.getElementById('buttonWrap')
const clear = document.getElementById('clear')

//create button element
const button = document.createElement("button")
const clearButton = document.createElement("button")
button.innerHTML = "Create"
clearButton.innerHTML = "Clear"
buttonWrap.appendChild(button).className = "button"
clear.appendChild(clearButton).className = "clearButton"

// create slider element to change the number of boxes
const slider = document.createElement("input");
slider.setAttribute("type", "min", "max", "value", "class")
slider.type = "range"
slider.class = "slider"
slider.min = '2';
slider.max = '30';
slider.value = '16'
buttonWrap.appendChild(slider)
console.log(slider.value)

//on input from user the slider changes the number on display
slider.oninput = ()=> {
    sliderValue.innerHTML = `Value ${slider.value}X${slider.value}`
    console.log(slider.value)
}

//display the number of boxes
let sliderValue = document.createElement("p")
sliderValue.innerHTML = `Value ${slider.value}X${slider.value}`
console.log(sliderValue.innerHTML)
buttonWrap.appendChild(sliderValue)

// let containerGridStyle = document.createElement('style');

//function to create a grid
const createGrid = (col, row) =>{

    for (i = 0; i<col*row; i++){
         let element = document.createElement("div");
         element.className = "gridDiv";
         element.onmouseover = function(){
            this.style.backgroundColor = 'red'
            console.log(i)
        }
        
        clearButton.addEventListener('click', ()=>{
            element.style.backgroundColor = '';
            

        })
       
        container.appendChild(element)
        
       
    }
   
console.log('created New Grid')
}

// remove old grid so that a new grid can be created when the button is clicked
const removeOldGrid =()=>{
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}



// container.style.display = "grid";
// container.style.gridTemplateColumns = `repeat(auto-fill, 1fr)`;
// container.style.gridTemplateRows =`repeat(auto-fill, 1fr)`;
// container.style.justifyContent = 'center';
// container.style.alignItems = 'center';

container.style.display = "grid";
container.style.gridTemplateColumns = `repeat(${parseInt(slider.value)},1fr)`;
container.style.gridTemplateRows = `repeat(${parseInt(slider.value)}, 1fr)`;
container.style.justifyContent = 'center';
container.style.alignItems = 'center';

//create new grid on click 
button.onclick = ()=>{
    removeOldGrid()
    createGrid(parseInt(slider.value), parseInt(slider.value))
    container.style.display = "grid";
    container.style.gridTemplateColumns = `repeat(${parseInt(slider.value)},1fr)`;
    container.style.gridTemplateRows = `repeat(${parseInt(slider.value)}, 1fr)`;
    container.style.justifyContent = 'center';
    container.style.alignItems = 'center';

    
    
}


createGrid(16, 16)







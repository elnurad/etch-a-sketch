
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
slider.max = '25';
slider.value = '16'
buttonWrap.appendChild(slider)

slider.oninput = ()=> {
    sliderValue.innerHTML = `Size: ${slider.value}X${slider.value}`
  
}


let sliderValue = document.createElement("p")
sliderValue.innerHTML = `Size: ${slider.value}X${slider.value}`
sliderValue.style.fontFamily = "Didot, serif";

buttonWrap.appendChild(sliderValue)
console.log(container.clientWidth)
const createGrid = (col, row) =>{
  
    for (i = 0; i<col*row; i++){
         let element = document.createElement("div");
         let elementWidth = container.clientWidth/row;
         let elementHeight = container.clientHeight/col;
         element.className = "gridDiv";
         element.style.width = `${elementWidth}px`
         element.style.height = `${elementHeight}px`
     
         element.onmouseover = function(){
            this.style.backgroundColor = 'green'
            
        }
        
        clearButton.addEventListener('click', ()=>{
            element.style.backgroundColor = '';
            

        })
       
        container.appendChild(element)
      
       
    }
   
// console.log('created New Grid')
}

// remove old grid so that a new grid can be created when the button is clicked
const removeOldGrid =()=>{
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}


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







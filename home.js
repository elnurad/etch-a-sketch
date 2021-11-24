
//select elements
const container = document.getElementById('container');
const buttonWrap = document.getElementById('buttonWrap')

//create button element
const button = document.createElement("button")
button.innerHTML = "Create"
buttonWrap.appendChild(button).className = "button"

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



//function to create a grid
const createGrid = (col, row) =>{

    for (i = 0; i<col*row; i++){
         let element = document.createElement("div");
         element.className = "gridDiv";
         element.onmouseover = function(){
            this.style.backgroundColor = 'red'
            console.log(i)
        }
        
        button.addEventListener('click', ()=>{
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

//create new grid on click 
button.onclick = ()=>{
    removeOldGrid()
    createGrid(parseInt(slider.value), parseInt(slider.value))

    
    
}


createGrid(16, 16)







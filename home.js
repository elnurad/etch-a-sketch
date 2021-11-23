

const container = document.getElementById('container');
const buttonWrap = document.getElementById('buttonWrap')

const button = document.createElement("button")
button.innerHTML = "Create"
buttonWrap.appendChild(button).className = "button"

//slider to set the number of boxes
const slider = document.createElement("input");
slider.setAttribute("type", "min", "max", "value", "class")
slider.type = "range"
slider.class = "slider"
slider.min = '2';
slider.max = '30';
slider.value = '16'
buttonWrap.appendChild(slider)
console.log(slider.value)

slider.oninput = ()=> {
    sliderValue.innerHTML = `Value ${slider.value}X${slider.value}`
    console.log(slider.value)
}

//number of grid col/row should change to slider.value

//display the number of boxes
let sliderValue = document.createElement("p")
sliderValue.innerHTML = `Value ${slider.value}X${slider.value}`
console.log(sliderValue.innerHTML)
buttonWrap.appendChild(sliderValue)




//function to create grid
const createGrid = (col, row) =>{

    for (i = 0; i<col*row; i++){
         let element = document.createElement("div");
         element.className = "gridDiv";
         element.onmouseover = function(){
            this.style.backgroundColor = 'red'
        }
        
        button.addEventListener('click', ()=>{
            element.style.backgroundColor = '';
          

        })
       
        container.appendChild(element)
       
    }


}


// if(slider.value === '16'){
//     createGrid(16,16)
// }
// else{
//     createGrid(slider.value, slider.value)
// }

// const createGrid = (col, row) =>{

//     for (i = 0; i<col*row; i++){
//          let element = document.createElement("div");
//         element.onmouseover = function(){
//             this.style.backgroundColor = 'red'
//         }
//         button.addEventListener('click', ()=>{
//             element.style.backgroundColor = '';

//         })
       
//         container.appendChild(element).className = "gridDiv"
       
//     }


// }




createGrid(16, 16)







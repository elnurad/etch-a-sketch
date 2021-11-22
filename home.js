

const container = document.getElementById('container');
const buttonWrap = document.getElementById('buttonWrap')
//container.appendChild(element); - one container

//function that creates a 16/16 grid of containers and appends them to container

const button = document.createElement("button")
button.innerHTML = "Clear"
buttonWrap.appendChild(button).className = "button"


//onclick button sets the elements backgground do no color

const createGrid = () =>{

    for (i = 0; i<16*16; i++){
         let element = document.createElement("div");
        element.onmouseover = function(){
            this.style.backgroundColor = 'red'
        }
        
        container.appendChild(element).className = "gridDiv"
        console.log(i)
    }


}

createGrid()


button.addEventListener('click', createGrid)

//when hover class changes to onhover and stays, i need a function



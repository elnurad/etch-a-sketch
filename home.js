

const container = document.getElementById('container');
//container.appendChild(element); - one container

//function that creates a 16/16 grid of containers and appends them to container

const createGrid = () =>{

    for (i = 0; i<=16*16; i++){
        let element = document.createElement("div");
        container.appendChild(element).className = "gridDiv"
        console.log(i)
    }


}

createGrid()
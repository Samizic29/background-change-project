const button = document.querySelector('button');
const body = document.querySelector('body');
const color = ['blue', 'yellow', 'red', 'green', 'purple', 'violet'];
    
    //default background
    body.style.backgroundColor = "black";

    function changeBackground(){
      const colorIndex = parseInt(Math.random() * color.length);
      body.style.backgroundColor = color[colorIndex];

    }

    button.addEventListener('click', changeBackground);
            
   


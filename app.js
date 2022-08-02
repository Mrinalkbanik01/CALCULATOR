 var string = "";  
 const but =  document.querySelectorAll(".numbers");
 const screen = document.querySelector(".screen");
 const buttons = Array.from(but);
 // console.log(buttons);
 for (let i = 0; i < buttons.length; i++) {
     buttons[i].addEventListener("click",function(){
         if (buttons[i].textContent == "=") {
            console.log(screen.textContent);
             string = eval(screen.textContent);
             screen.textContent = string ;
         }
         else if (buttons[i].textContent == "C") {
            string = "";
            screen.textContent = string;  
         } 
         else {
             string = string + buttons[i].textContent;
             screen.textContent = string;
         }
     })
    
 }

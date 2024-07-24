let mostrador = document.querySelector(".galeria"); 
/* let next = document.querySelector(".next");
let back = document.querySelector (".back"); */

/* mostrador.addEventListener("wheel", (e) => {

    e.preventDefault(); 
    mostrador.scrollLeft += e.deltaY; 
})

next.addEventListener("click", (e)=> {
    mostrador.scrollLeft += 400; 

    mostrador.style.scrollBehavior = "smooth";

})

back.addEventListener("click", (e)=> {
    mostrador.style.scrollBehavior = "smooth";
    mostrador.scrollLeft -= 400; 
 

}) */

let botones = document.querySelectorAll(".boton")

botones.forEach( function (boton)   {

    boton.addEventListener("click", (e) => {
      
    esteBoton = e.currentTarget.classList ; 

        if(esteBoton.contains("next")) {
            mostrador.scrollLeft += 400; 
            mostrador.style.scrollBehavior = "smooth";

        }

        else if (esteBoton.contains("back")) {

            mostrador.scrollLeft -= 400; 
            mostrador.style.scrollBehavior = "smooth";
        }
       
   
    }
    ) 

    
}      )
 
 



/* let mover = (e) => { 
     
   
    


    e.preventDefault(); 
    mostrador.scrollLeft += 400 ; 
    
}

next.addEventListener("click", mover); 

back.addEventListener("click", mover) */
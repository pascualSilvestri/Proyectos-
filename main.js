   let img = document.querySelectorAll(".img");

   for(let i = 0 ; i < img.length ; i++){
        img[i].addEventListener("click", function(){
        img[i].classList.toggle("activar");
        });
   }


let counters = document.querySelectorAll(".counter span");
let sectAbt = document.querySelector(".about")

let counterActivate = false;

window.addEventListener("scroll",()=>{
    if (pageYOffset > sectAbt.offsetTop - (sectAbt.offsetHeight/2)  && counterActivate === false ){
        
        counters.forEach((counter)=>{
            counter.innerText = 0;
            let count = 0;

            const target = parseInt(counter.dataset.count);
            
            function updateCount(){
                if(count < target){
                    count++;
                    counter.innerText = count;

                    setTimeout(updateCount,10);
                }
                else {
                    counter.innerText = target;
                }
            }

            updateCount();
            counterActivate = true;



        });
    }            

});



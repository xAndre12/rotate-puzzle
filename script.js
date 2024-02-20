const imgs = document.querySelectorAll("img");
const start = document.querySelector(".start");
const col = document.querySelectorAll(".col");
const time = document.querySelector(".time")
const countdown = document.querySelector(".countdown");
let gameOn = false;
let found = 0;

start.addEventListener("click", () => {
    start.style.display = "none";
    time.style.display = "flex";
  for (let i = 0; i < 30; i++) {
    setTimeout(() => {
      setTimeout(() => {
        countdown.innerHTML = parseInt(countdown.innerHTML) - 1;
        if(parseInt(countdown.innerHTML) === 0){
          start.style.display = "flex";
          time.style.display = "none";
        }
      }, 1000 * i); 
    }, 1000);
  }
  if (!gameOn) {
    gameOn = true;
    for (let i = 0; i < imgs.length; i++) {
      
        imgs[i].style.transform = `rotate(${
          Math.floor(Math.random() * 3 + 1) * 90
        }deg)`;
      imgs[i].addEventListener("click", () => {
        found = 0;
        const deg = Number(
          imgs[i].style.transform
            .split("")
            .filter((item) => Number(item) >= 0)
            .join("")
        );
       
        imgs[i].style.transform = `rotate(${deg + 90}deg)`;
  
        if((deg + 90) % 360 === 0){
          imgs[i].setAttribute("pozition", true)
        }else{
          imgs[i].setAttribute("pozition", false)
        }
        for (let i = 0; i < imgs.length; i++) {
          if(imgs[i].getAttribute("pozition") === "true"){
            found++;
          }else{
            found--;
          }
        }
        if(found === 9){
          for (let i = 0; i < col.length; i++) {
           col[i].style.border = "2px solid lightgreen"; 
          }
        }
        else{
          col[i].style.border = "2px solid black";
        }
        
      });
    }
  } else {
    for (let i = 0; i < imgs.length; i++) {
        imgs[i].style.transform = `rotate(${
            Math.floor(Math.random() * 3 + 1) * 90
          }deg)`;
    }
  }
});

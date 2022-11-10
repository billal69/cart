
let quantity = 0


let butonplus = document.querySelector(".qt-plus")
butonplus.addEventListener("click",(e) =>{
document.querySelector(".qt").innerText=(quantity=quantity+1)
 })


let butonmoin = document.querySelector(".qt-minus")
butonmoin.addEventListener("click",(e) =>{
  document.querySelector(".qt").innerText=(quantity=quantity-1)
  
})


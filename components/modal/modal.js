const modalBtn =  document.querySelector("#modal-btn")
let modal =  document.querySelector(".backdrop")

console.log(modal)

modalBtn.addEventListener(
    "click",
    () => {
        console.log(modal)
        modal.style.display="block"
        document.querySelector("#close").addEventListener(
            "click",
            ()=>{
                modal.style.display="none"
            }
        )
    }
)
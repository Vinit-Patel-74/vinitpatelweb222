const radiobtns = document.querySelectorAll('.query')
const otherBtn = document.getElementById('other')

radiobtns.forEach(el => { 
    el.addEventListener("click", () => {
        if (otherBtn.checked == true) {
            const otherInput = document.getElementById("otherInput")
            otherInput.classList = "query-field query-field-show" 
        } else {
            otherInput.classList.remove("query-field-show")
        }
    })
    
    
});



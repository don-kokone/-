const toggles = document.querySelectorAll(".service-toggle")

toggles.forEach(toggle =>{
    toggle.addEventListener("click", () =>{
        toggle.parentNode.classList.toggle("active")
    })
})
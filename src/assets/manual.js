let check = document.querySelector("input[type=checkbox]")

    check.addEventListener("click", () => {
        check.style.color = (check.checked) ? "#20B2AA" : "blue"
    })
    console.log("Hi")
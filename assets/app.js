let nameInput = document.querySelector(".name-input")
let btn = document.querySelector(".submit-btn")
let name = document.querySelector(".name")
let gender = document.querySelector(".gender")
let msgTxt = document.querySelector(".msg-txt")

let getGender = async () => {
    try {
        let inputTxt = nameInput.value.trim()
        //implementacion de la api genderize.io
        let response = await fetch(`https://api.genderize.io?name=${inputTxt}`)
        let data = await response.json()
        //Validación si hay algún género asociado al nombre digitado 
        if(data.gender === null || data.gender === undefined) {
            msgTxt.innerHTML = `<h2>Oops! Parece que no se ingresó un nombre válido.</h2>`
            msgTxt.style.color = "red"
        }
        //Validación y mostrar en pantalla el nombre y el género
        else {
            name.innerHTML = `<h3>Nombre: ${data.name}</h1>`
            if(data.gender == "male") {
            gender.innerHTML = `<h3>Género: Masculino</h1>`
            }
            else {
                gender.innerHTML = `<h3>Género: Femenino</h1>`
            }
            
            msgTxt.innerHTML = "<h4>El nombre fue detectado satisfactoriamente.</h4>"
            msgTxt.style.color = "#44DB65"
        }
    } catch (error) {
        console.log(`${error}`)
    }
}

btn.addEventListener("click", getGender)
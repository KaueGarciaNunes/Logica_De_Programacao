const form = document.querySelector("form");
const resposta = document.querySelector("h2");
const celsius = document.querySelector("#inputCelsius");

form.addEventListener("submit", (e) => {
    e.preventDefault ();
    let celsiusvalue = parseFloat(celsius.value);

    let fahrenheit = (celsius.value * 9 / 5) + 32
    
    resposta.innerText = `${celsiusvalue}° é igual a ${fahrenheit.toFixed(2)}°F`
});
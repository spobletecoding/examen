function aumentarPetting(id) {
    const pettingElement = document.getElementById(id);
    let currentPettings = parseInt(pettingElement.textContent);
    currentPettings++;
    pettingElement.textContent = currentPettings + (currentPettings === 1 ? ' petting' : ' pettings');
}

function desaparecerBoton(boton) {
    boton.remove();
}

function mostrarAlerta() {
    var select = document.getElementById("petSelect");
    var selectedOption = select.options[select.selectedIndex].value;

    switch (selectedOption) {
        case "dog":
            alert("You looking for a: Dog");
            break;
        case "cat":
            alert("You looking for a: Cat");
            break;
        default:
            break;
    }
}
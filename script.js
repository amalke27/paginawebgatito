
function error(error) {
  switch(error.code) {
    case error.PERMISSION_DENIED:
      x.innerHTML = "User denied the request for Geolocation."
      break;
    case error.POSITION_UNAVAILABLE:
      x.innerHTML = "Location information is unavailable."
      break;
    case error.TIMEOUT:
      x.innerHTML = "The request to get user location timed out."
      break;
    case error.UNKNOWN_ERROR:
      x.innerHTML = "An unknown error occurred."
      break;
  }
}


  function validarFormulario() {
    const nombreUsuario = document.getElementById("nombreUsuario").value;
    const correo = document.getElementById("correo").value;
    const nombreMascota = document.getElementById("nombreMascota").value;

    if (nombreUsuario === "" || correo === "" || nombreMascota === "") {
      alert("¡Por favor, completa todos los campos requeridos!");
      return false;
    }

    alert("¡Formulario enviado correctamente! 😊");
    return true;
  }


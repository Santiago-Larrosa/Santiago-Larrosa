function updateClock() {
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();

    // Agrega un cero inicial si los minutos o segundos son menores a 10
    minutes = (minutes < 10 ? "0" : "") + minutes;
    seconds = (seconds < 10 ? "0" : "") + seconds;

    // Formato de 12 horas o 24 horas (dependiendo de tus preferencias)
    var amPm = hours < 12 ? "AM" : "PM";
    hours = hours > 12 ? hours - 12 : hours;
    hours = hours === 0 ? 12 : hours;

    // Actualiza el contenido del reloj
    var clockElement = document.getElementById("clock");
    clockElement.innerHTML = hours + ":" + minutes + ":" + seconds + " " + amPm;
  }

  // Actualiza el reloj cada segundo
  setInterval(updateClock, 1000);



function decimalToBinary(decimal) {
  if (decimal === 0) {
    return "0"; // Caso especial para el número decimal 0
  }

  var binary = "";

  while (decimal > 0) {
    var remainder = decimal % 2; // Calcula el residuo de la división entre 2
    binary = remainder + binary; // Agrega el residuo al inicio de la representación binaria
    decimal = Math.floor(decimal / 2); // Actualiza el número decimal dividiéndolo entre 2 (redondeo hacia abajo)
  }

  return binary;
}

function convertDecimal(event) {
  event.preventDefault(); // Evitar que se envíe el formulario y se recargue la página

  var decimalInput = parseInt(document.getElementById("decimalInput").value);

  var tableBody = document.querySelector("#resultTable tbody");
  tableBody.innerHTML = ""; // Limpiar la tabla antes de agregar nuevas filas

  for (var i = 0; i <= decimalInput; i++) {
    var binaryResult = decimalToBinary(i);

    var newRow = tableBody.insertRow();
    var decimalCell = newRow.insertCell(0);
    var binaryCell = newRow.insertCell(1);

    decimalCell.innerHTML = i;
    binaryCell.innerHTML = binaryResult;
  }
}

document.getElementById("decimalForm").addEventListener("submit", convertDecimal);

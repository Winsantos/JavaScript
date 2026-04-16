let registro;

do {
  registro = +prompt(`
         insira sua nota:
    `);
  if (registro >= 0 && registro <= 10) {
    alert("Sua nota foi registrada com sucesso!");
  } else {
    alert("Sua nota não foi registrada");
  }
} while (registro < 0 || registro > 10);

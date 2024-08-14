function converter() {
  const valor = parseFloat(document.getElementById('valor').value);
  const unidadeOrigem = document.getElementById('unidadeOrigem').value;
  const unidadeDestino = document.getElementById('unidadeDestino').value;

  let resultado = 0;

  // Conversões para kg:
  if (unidadeDestino === 'kg') {
    if (unidadeOrigem === 'g') {
      resultado = valor / 1000;
    } else if (unidadeOrigem === 'mg') {
      resultado = valor / 1000000;
    } else if (unidadeOrigem === 'lb') {
      resultado = valor / 2.20462;
    } else if (unidadeOrigem === 'oz') {
      resultado = valor / 35.274;
    }
  }

  // Conversões para g:
  if (unidadeDestino === 'g') {
    if (unidadeOrigem === 'kg') {
      resultado = valor * 1000;
    } else if (unidadeOrigem === 'mg') {
      resultado = valor / 0.001;
    } else if (unidadeOrigem === 'lb') {
      resultado = valor * 453.592;
    } else if (unidadeOrigem === 'oz') {
      resultado = valor * 28.3495;
    }
  }

  // Conversões para mg:
  if (unidadeDestino === 'mg') {
    if (unidadeOrigem === 'kg') {
      resultado = valor * 1000000;
    } else if (unidadeOrigem === 'g') {
      resultado = valor * 1000;
    } else if (unidadeOrigem === 'lb') {
      resultado = valor * 453592;
    } else if (unidadeOrigem === 'oz') {
      resultado = valor * 28349.5;
    }
  }

  // Conversões para oz:
  if (unidadeDestino === 'oz') {
    if (unidadeOrigem === 'kg') {
      resultado = valor * 35.274;
    } else if (unidadeOrigem === 'g') {
      resultado = valor / 0.035274;
    } else if (unidadeOrigem === 'mg') {
      resultado = valor / 0.000035274;
    } else if (unidadeOrigem === 'lb') {
      resultado = valor * 16;
    }
  }

  // Conversões para lb:
  if (unidadeDestino === 'lb') {
    if (unidadeOrigem === 'kg') {
      resultado = valor * 2.20462;
    } else if (unidadeOrigem === 'g') {
      resultado = valor / 0.00220462;
    } else if (unidadeOrigem === 'mg') {
      resultado = valor / 0.00000220462;
    } else if (unidadeOrigem === 'oz') {
      resultado = valor / 16;
    }
  }

  document.getElementById('resultado').textContent = `Resultado: ${resultado.toFixed(3)}`;
}

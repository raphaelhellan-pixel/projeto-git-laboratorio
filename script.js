// Seleciona os três inputs.
const valor1 = document.getElementById("valor1");
const valor2 = document.getElementById("valor2");
const resultado = document.getElementById("resultado");

// Função responsável pela soma.
function somar() {
    // Se o campo estiver vazio, considera o valor como zero.
    const numero1 = parseFloat(valor1.value) || 0;
    const numero2 = parseFloat(valor2.value) || 0;

    resultado.value = numero1 + numero2;
}

// O evento "blur" acontece quando o input perde o foco.
valor1.addEventListener("blur", somar);
valor2.addEventListener("blur", somar);

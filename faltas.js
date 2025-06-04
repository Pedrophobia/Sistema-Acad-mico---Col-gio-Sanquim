
document.addEventListener("DOMContentLoaded", function () {
    const linhas = document.querySelectorAll("#tabela-faltas tbody tr");
  
    linhas.forEach((linha) => {
      const percentualTexto = linha.cells[3].innerText.replace('%', '');
      const percentual = parseFloat(percentualTexto);
  
      if (percentual > 10) {
        linha.classList.add("table-danger"); // Bootstrap classe para destaque
      }
    });
  });
  
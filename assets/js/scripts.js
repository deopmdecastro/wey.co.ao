function toggleMenu() {

    var navLinks = document.getElementById("navLinks");

    navLinks.classList.toggle("active");

  }

   // JavaScript para controlar o slide
   let slideIndex = 0;
   const intervalTime = 3000; // Intervalo de tempo em milissegundos (30 segundos)

   function showSlide(n) {
     const slides = document.querySelectorAll(".slide-item");
     const radios = document.querySelectorAll(".radio-btn");
     
     slides.forEach((slide) => {
       slide.style.display = "none";
     });

     radios.forEach((radio) => {
       radio.checked = false;
     });

     slides[n].style.display = "block";
     radios[n].checked = true;
   }

   function changeSlide(n) {
     slideIndex += n;
     const slides = document.querySelectorAll(".slide-item");

     if (slideIndex >= slides.length) {
       slideIndex = 0;
     }
     if (slideIndex < 0) {
       slideIndex = slides.length - 1;
     }

     showSlide(slideIndex);
   }

   const prevBtn = document.getElementById("prevBtn");
   const nextBtn = document.getElementById("nextBtn");

   prevBtn.addEventListener("click", () => {
     changeSlide(-1);
   });

   nextBtn.addEventListener("click", () => {
     changeSlide(1);
   });

   const radioBtns = document.querySelectorAll(".radio-btn");

   radioBtns.forEach((radio, index) => {
     radio.addEventListener("click", () => {
       slideIndex = index;
       showSlide(slideIndex);
     });
   });

   // Função para mudar automaticamente o slide a cada intervalTime
   function autoChangeSlide() {
     changeSlide(1);
   }

   // Iniciar a mudança automática de slide
   setInterval(autoChangeSlide, intervalTime);

   showSlide(slideIndex);

// Função para mostrar ou ocultar respostas
function mostrarOcultarResposta(idResposta, botao) {
  var resposta = document.getElementById(idResposta);
  if (resposta.style.display === "none" || resposta.style.display === "") {
      resposta.style.display = "block";
      botao.innerHTML = '<i class="fas fa-minus"></i>'; // Ícone de "-" e texto "Ocultar"
  } else {
      resposta.style.display = "none";
      botao.innerHTML = '<i class="fas fa-plus"></i>'; // Ícone de "+" e texto "Expandir"
  }
}

// Função para mostrar ou ocultar respostas
function mostrarOcultarsublists(idsublists, botao) {
  var resposta = document.getElementById(idsublists);
  if (sublists.style.display === "none" || sublists.style.display === "") {
    sublists.style.display = "block";
      botao.innerHTML = '<i class="fa fa-caret-up"></i>'; // Ícone de "-" e texto "Ocultar"
  } else {
    sublists.style.display = "none";
      botao.innerHTML = '<i class="fa fa-caret-down"></i>'; // Ícone de "+" e texto "Expandir"
  }
}

// Função para mostrar ou ocultar Tabela

const toggleButton = document.getElementById("toggleButton");
        const myTable = document.getElementById("myTable");

        toggleButton.addEventListener("click", function() {
            if (myTable.style.display === "none") {
                myTable.style.display = "table"; // Mostra a tabela
                toggleButton.textContent = "Ocultar Tabela";
            } else {
                myTable.style.display = "none"; // Oculta a tabela
                toggleButton.textContent = "Mostrar Tabela";
            }
        });
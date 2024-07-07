/*!
* Start Bootstrap - Creative v7.0.7 (https://startbootstrap.com/theme/creative)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-creative/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // Activate SimpleLightbox plugin for portfolio items
    new SimpleLightbox({
        elements: '#portfolio a.portfolio-box'
    });

});

document.getElementById('quizForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah form untuk submit

    // Jawaban yang benar
    const correctAnswers = {
    question1: "A. It's likely to rain later.",
    question2: "C. Were",
    question3: "B. He never arrives on time.",
    question4: "C. The children have two toys.",
    question5: "A. The team of players are practicing hard.",
    question6: "B. has left",
    question7: "C. He usually sits in the classroom.",
    question8: "B. The book on the table is belong to me.",
    question9: "B. An apple a day keeps the doctor away.",
    question10: "B. The concert was amazing; the music was fantastic.",
    question11: "A. very shocked",
    question12: "B. This book is more interesting than that one.",
    question13: "B. She will goes to the store after work.",
    question14: "C. She might go to the party if she finishes her work on time.",
    question15: "B. A new house is being built by them.",
    question16: "B. goes",
    question17: "C. They arrived at the airport in time.",
    question18: "C. If I had known, I would have come.",
    question19: "B. He decided to quit smoking last year.",
    question20: "C. Me and him went to the store together.",
    question21: "C. She is studying hard but she also finds time to relax.",
    question22: "C. drove",
    question23: "A. but",
    question24: "B. Because",
    question25: "A. because",
    question26: "B. so",
    question27: "A. but",
    question28: "B. so",
    question29: "C. Since",
    question30: "A. so",
    question31: "B. so",
    question32: "C. despite",
    question33: "C. Since",
    question34: "A. despite",
    question35: "B. despite",
    question36: "A. since",
    question37: "A. although",
    question38: "A. but",
    question39: "A. so",
    question40: "A. despite",
    question41: "A. Because",
    question42: "A. so",
    question43: "B. despite",
    question44: "C. so",
    question45: "A. So",
    question46: "B. so",
    question47: "C. because",
    question48: "B. Despite",
    question49: "B. so",
    question50: "C. although"


    };

    // Memeriksa jawaban yang dipilih oleh pengguna
    let score = 0;
    const formData = new FormData(this);

    formData.forEach((value, key) => {
      // Memeriksa apakah jawaban benar
      if (correctAnswers[key] === value) {
        score++;
        document.querySelector(`input[name=${key}][value="${value}"]`).parentNode.classList.add('answer-correct');
      } else {
        document.querySelector(`input[name=${key}][value="${value}"]`).parentNode.classList.add('answer-incorrect');
      }
    });

    // Menampilkan hasil
    const totalQuestions = Object.keys(correctAnswers).length;
    const resultPercentage = (score / totalQuestions) * 100;

    const resultsDiv = document.getElementById('quizResults');
    resultsDiv.innerHTML = `<h5>Hasil:</h5>
                            <p>Skor Anda: ${score} dari ${totalQuestions}</p>
                            <p>Persentase: ${resultPercentage}%</p>`;
  });

  // Event listener untuk tombol Clear
  document.getElementById('clearButton').addEventListener('click', function() {
    const form = document.getElementById('quizForm');
    form.reset(); // Mereset form untuk menghapus seleksi radio button
    // Hapus kelas CSS untuk tampilan jawaban benar/salah
    const radioInputs = form.querySelectorAll('input[type="radio"]');
    radioInputs.forEach(input => {
      input.parentNode.classList.remove('answer-correct', 'answer-incorrect');
    });
    // Hapus hasil yang ditampilkan
    document.getElementById('quizResults').innerHTML = '';
  });
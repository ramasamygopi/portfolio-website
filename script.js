document.addEventListener("DOMContentLoaded", function() {
    // Menu Toggle
    const menuIcon = document.getElementById('menu-icon');
    const navbar = document.querySelector('.navbar');

    menuIcon.addEventListener('click', function() {
        navbar.classList.toggle('active');
    });

    document.querySelector('.Portfolio').addEventListener('click',()=>{
        navbar.classList.remove('active')
    });

    // Smooth Scrolling
    document.querySelectorAll('.navbar a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Sticky Header
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header');
        header.classList.toggle('sticky', window.scrollY > 0);
    });

    // Typing Effect
    const typingText = document.querySelector('.typing-text span');
    const words = ['Web Developer', 'Designer', 'Freelancer'];
    let wordIndex = 0;
    let letterIndex = 0;

    function type() {
        if (letterIndex < words[wordIndex].length) {
            typingText.textContent += words[wordIndex].charAt(letterIndex);
            letterIndex++;
            setTimeout(type, 200);
        } else {
            setTimeout(erase, 2000);
        }
    }

    function erase() {
        if (letterIndex > 0) {
            typingText.textContent = words[wordIndex].substring(0, letterIndex - 1);
            letterIndex--;
            setTimeout(erase, 100);
        } else {
            wordIndex = (wordIndex + 1) % words.length;
            setTimeout(type, 200);
        }
    }

    type();

    // Initialize WOW.js for animations
    new WOW().init();

    // Header Hide on Scroll Down, Show on Scroll Up
    const header = document.querySelector('.header');
    let lastScrollTop = 0;

    const handleScroll = () => {
      let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
      if (currentScroll > lastScrollTop) {
        header.classList.add('hidden');
      } else {
        header.classList.remove('hidden');
      }
      lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    };

    const handleKeyUp = (event) => {
      if (event.key === 'PageUp') {
        header.classList.remove('hidden');
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('keyup', handleKeyUp);
});
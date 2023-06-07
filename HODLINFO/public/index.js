var body = document.querySelector('body');
    var themeButton = document.getElementById('themeButton');

    themeButton.addEventListener('click', function() {
      body.classList.toggle('dark');
      if (body.classList.contains('dark')) {
        themeButton.classList.add('dark');
        themeButton.textContent = 'Light Theme';
      } else {
        themeButton.classList.remove('dark');
        themeButton.textContent = 'Dark Theme';
      }
    });
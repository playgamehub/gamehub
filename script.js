document.getElementById('toggleNav').addEventListener('click', function() {
    var nav = document.getElementById('mainNav');
    if (nav.style.display === 'none') {
      nav.style.display = 'block';
    } else {
      nav.style.display = 'none';
    }
  });

  document.getElementById('toggleNav').addEventListener('click', function() {
    var nav = document.getElementById('mainNav');
    var body = document.body;
  
    if (nav.style.display === 'none') {
      nav.style.display = 'block';
      body.classList.add('blur'); // Füge eine CSS-Klasse hinzu, um den Weichzeichnungs-Effekt zu aktivieren
    } else {
      nav.style.display = 'none';
      body.classList.remove('blur'); // Entferne die CSS-Klasse, um den Weichzeichnungs-Effekt zu deaktivieren
    }
  });
  
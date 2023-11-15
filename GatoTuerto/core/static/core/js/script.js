var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    document.getElementById('menu-superior').outerHTML = this.responseText;
  }
}
xhttp.open('GET' , 'menu-superior.html', true);
xhttp.send();

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    document.getElementById('menu-superior-ad').outerHTML = this.responseText;
  }
}
xhttp.open('GET' , 'menu-superior-ad.html', true);
xhttp.send();

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    document.getElementById('footer').outerHTML = this.responseText;
  }
}
xhttp.open('GET' , 'footer.html', true);
xhttp.send();

function mostrarPopup() {
    document.getElementById("miPopup").style.display = "block";
  }

  function ocultarPopup() {
    document.getElementById("miPopup").style.display = "none";
  }

  $(document).ready(function() {

    $('[data-toggle="tooltip"]').tooltip();
  
    if ($('#tabla-principal').length > 0) {
  
      var table = new DataTable('#tabla-principal', {
          language: {
              url: '//cdn.datatables.net/plug-ins/1.13.4/i18n/es-ES.json',
          },
      });
  
    }
  
  });


$(document).ready(function () {
    $("#formulario-ingresar").validate({
      rules: {
        usuario: {
          required: true,
        },
        
        password: {
          required: true,
          minlength: 5,
        },

      }, // --> Fin de reglas
      messages: {
        usuario: {
          required: 'El usuario es un campo requerido',
        },      
        password: {
          required: "La contraseña es una campo obligatorio",
          minlength: "Mínimo 5 caracteres",
        },

      },
    });
  });
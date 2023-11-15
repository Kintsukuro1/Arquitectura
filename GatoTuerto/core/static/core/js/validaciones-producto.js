  $(document).ready(function () {
    $("#formulario-producto").validate({
      rules: {
        id: {
          required: true,
        },
        nombre: {
          required: true,
        },
        descripcion: {
          required: true,
        },
        precio: {
          required: true,
        },
      }, // --> Fin de reglas
      messages: {
        id: {
          required: 'El ID es un campo requerido',
        },
        nombre: {
          required: "El nombre debe tener un valor valido",
        },
        descripcion: {
          required: "La descripcion debe tener un valor valido",
        },
        precio: {
          required: "El precio es una campo obligatorio",
        },
      },
    });
  });
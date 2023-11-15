$(document).ready(function () {
    $("#formulario-bodega").validate({
        rules: {
            cantidad: {
                required: true,
            },
        },
        messages: {
            cantidad: {
                required: "Debe dar una cantidad valida",
            },
        },
    });
});
$(document).ready(function() {
    $('#exercise').change(function(evt) {
        var option = $(this).find('option:selected');
        switch (option.val()) {
            case "all":
                $("#patient_filter").prop("disabled", false);
                $("#patients_all").removeClass("hidden");
                $("#group-age").addClass('hidden');
                $("#patients_50").addClass("hidden");
                break;
            case "age":
                $("#group-age").removeClass('hidden');
                $("#patient_filter").prop("disabled", true);
                $("#patients_all").addClass("hidden");
                $("#patients_50").addClass("hidden");
                break;
            case "50":
                $("#patient_filter").prop("disabled", false);
                $("#patients_50").removeClass("hidden");
                $("#patients_all").addClass("hidden");
                $("#group-age").addClass('hidden');
                break;
            default:
                alert('Select a option');
                $("#patient_filter").prop("disabled", true);
                $("#patients_all").addClass("hidden");
                $("#group-age").addClass('hidden');
                $("#patients_50").addClass("hidden");
        }
    });

    // Punto 1.
    // Crear código para filtrar pacientes por nombre.
    $("#patient_filter").keyup(function () {
        var rows_50 = $('#patients_50').find('div.row').hide();
        var rows_all = $('#patients_all').find('div.row').hide();
        if (this.value.length) {
            var data = this.value.split(" ");
            if (rows_50 != null || rows_50 != undefined) {
                $.each(data, function(k, v) {
                    rows_50.filter(":contains('" + v + "')").show();
                });
            }

            if (rows_all != null || rows_all != undefined) {
                $.each(data, function(k, v) {
                    rows_all.filter(":contains('" + v + "')").show();
                });
            }
        } else {
            if (rows_50 != null || rows_50 != undefined) {
                rows_50.show();
            }

            if (rows_all != null || rows_all != undefined) {
                rows_all.show();
            }
        }
    });
});


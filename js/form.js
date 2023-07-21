$(document).ready(function() {

    $('form').on("submit", function(e)
    {
        e.preventDefault();
        var z_form = $(this).serialize();

        $.ajax({
            type: 'POST',
            url: '/send_form.php',
            data: z_form,
            success: function(data)
            {
                return false;
            },
        });

        return false;
    });
});
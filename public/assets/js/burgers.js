$(function() {
    $(".change-devoured").on("click", function(event) {
        var id = $(this).data('id');
        console.log(id);

        $.ajax("/api/burgers/" + id, {
            type: "PUT"
        }).then(function(data) {
            // console.log("Devoured " + data.burger_name);
            console.log(data);
            location.reload();
        });
    });

    $('.create-form').on('submit', function(e) {
        e.preventDefault();

        var burger = {
          name: $("#new-burger").val()
        }

        $.ajax("/api/burgers",{
          type: "POST",
          data: burger
        }).then(function(data){
          console.log(data);
          location.reload();
        });
    });

});
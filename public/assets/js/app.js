$(document).ready(function() {

  $("#submit-burger").on("click", function(event) {
    event.preventDefault();
    
    const newBurger = {
      burger_name: $("#add-burger").val().trim()
    }

    $.ajax({
      url: "/api/burgers",
      method: "POST",
      data: newBurger
    }).then(function(burgerDB) {
      console.log(burgerDB);
      location.reload();
    });
  });
  

  $(".eat-burger").on("click", function() {

    const burgerID = $(this).data().id;
    console.log(burgerID)
    $.ajax({
      url: "/api/burgers/" + burgerID,
      method: "PUT"
    }).then(function(data) {
      location.reload();
      console.log(data)
    });
  });

  $(".discard-burger").on("click", function () {

    const burgerID = $(this).data().id;
    $.ajax({
      url: "/api/burgers/" + burgerID,
      method: "DELETE"
    }).then(function (data) {
      location.reload();
    });

  })
});
var update = function () {
  if ($("#list1 div").length == 0) {
    if (score < 5) {
      $("#list1").append("You made " + score + " Errors! Well Done");
      $("#list1").addClass("green");
    } else {
      $("#list1").append("You made " + score + " Errors! Try Again");
      $("#list1").addClass("red");
    }
  }
};

var reset = function () {
  //for list1
  var list1 = [
    '<div value="one">1</div>',
    '<div value="two">2</div>',
    '<div value="three">3</div>',
    '<div value="four">4</div>',
    '<div value="five">5</div>',
    '<div value="six">6</div>',
    '<div value="seven">7</div>',
    '<div value="eight">8</div>',
    '<div value="nine">9</div>',
    '<div value="ten">10</div>',
  ];
  $("#list1").empty();
  $("#list1").append(list1);
  $("#list1").removeClass("red");
  $("#list1").removeClass("green");

  //for list2
  var list2 = [
    '<div value="ten">dix</div>',
    '<div value="seven">sept</div>',
    '<div value="four">quatre</div>',
    '<div value="six">six</div>',
    '<div value="two">deux</div>',
    '<div value="eight">huit</div>',
    '<div value="five">cinq</div>',
    '<div value="three">trois</div>',
    '<div value="one">un</div>',
    '<div value="nine">neuf</div>',
  ];
  $("#list2").empty();
  $("#list2").append(list2);
};

// global variable; where the first selected number will be saved
window.first_selected_number = null;

var score = 0;

// create a click listener on all <div> on list1
$("#list1").on("click", "div", function () {
  // this will remember the first number selected
  window.first_selected_number = $(this).attr("value");
  if (window.first_selected_number === window.second_selected_number) {
    $(this).fadeOut(500, function () {
      $(this).remove();
      update();
    });
    $("#list2 div").each(function () {
      var is_matching_number =
        $(this).attr("value") === window.second_selected_number;
      if (is_matching_number) {
        $(this).fadeOut(500, function () {
          $(this).remove();
        });
      }
    });
    // forgets the first and second numbers
    window.first_selected_number = null;
    window.second_selected_number = null;
  } else if (window.first_selected_number && window.second_selected_number) {
    $(this).css("background-color", "red");
    score++;
    window.first_selected_number = null;
    window.second_selected_number = null;
  }
});

window.second_selected_number = null;
$("#list2").on("click", "div", function () {
  // this will remember the second number selected
  window.second_selected_number = $(this).attr("value");
  if (window.first_selected_number === window.second_selected_number) {
    $(this).fadeOut(500, function () {
      $(this).remove();
    });
    $("#list1 div").each(function () {
      var is_matching_number =
        $(this).attr("value") === window.first_selected_number;
      if (is_matching_number) {
        $(this).fadeOut(500, function () {
          $(this).remove();
          update();
        });
      }
    });
    // forgets the first and second numbers
    window.first_selected_number = null;
    window.second_selected_number = null;
  } else if (window.first_selected_number && window.second_selected_number) {
    $(this).css("background-color", "red");
    score++;
    window.first_selected_number = null;
    window.second_selected_number = null;
  }
});

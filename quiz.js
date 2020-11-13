// var score = 0;

// $("input[type='button']").on("click", function () {
//   var monday = $("#monday").val();
//   if (monday === "monday") {
//     $("#monday").css("color", "green");
//     score++;
//   } else {
//     $("#monday").css("color", "red");
//   }

//   var thursday = $("#thursday").val();
//   if (thursday === "thursday") {
//     $("#thursday").css("color", "green");
//     score++;
//   } else {
//     $("#thursday").css("color", "red");
//   }

//   var saturday = $("#saturday").val();
//   if (saturday === "saturday") {
//     $("#saturday").css("color", "green");
//     score++;
//   } else {
//     $("#saturday").css("color", "red");
//   }

//   var friday = $("#friday").val();
//   if (friday === "friday") {
//     $("#friday").css("color", "green");
//     score++;
//   } else {
//     $("#friday").css("color", "red");
//   }

//   var sunday = $("#sunday").val();
//   if (sunday === "sunday") {
//     $("#sunday").css("color", "green");
//     score++;
//   } else {
//     $("#sunday").css("color", "red");
//   }

//   var tuesday = $("#tuesday").val();
//   if (tuesday === "tuesday") {
//     $("#tuesday").css("color", "green");
//     score++;
//   } else {
//     $("#tuesday").css("color", "red");
//   }

//   var wednesday = $("#wednesday").val();
//   if (wednesday === "wednesday") {
//     $("#wednesday").css("color", "green");
//     score++;
//   } else {
//     $("#wednesday").css("color", "red");
//   }

//   var today = $("#today").val();
//   if (today === "today") {
//     $("#today").css("color", "green");
//     score++;
//   } else {
//     $("#today").css("color", "red");
//   }

//   var avanthier = $("#avanthier").val();
//   if (avanthier === "avanthier") {
//     $("#avanthier").css("color", "green");
//     score++;
//   } else {
//     $("#avanthier").css("color", "red");
//   }

//   var hier = $("#hier").val();
//   if (hier === "hier") {
//     $("#hier").css("color", "green");
//     score++;
//   } else {
//     $("#hier").css("color", "red");
//   }

//   $(".message").append(score).css({
//     color: "blue",
//     margin: "0 auto",
//     textAlign: "center",
//   });
// });




var forAtt = document.querySelectorAll("select");
var submitButton = document.querySelector("#submit");
var resetButton = document.querySelector("#reset");
var message = document.querySelector(".message");
var score = 0;

submitButton.addEventListener("click", function () {
  selctor();
  var someMessage;
  if (score >= 5) {
    message.classList.add("green");
    someMessage = "Good J0b!";
  } else {
    message.classList.add("red");
    someMessage = "Don't Worry You Can Do It!";
  }
  message.append(score + " " + someMessage);
  this.setAttribute("disabled", "true");
});

resetButton.addEventListener("click", function () {
  for (var i = forAtt.length - 1; i >= 0; i--) {
    forAtt[i].value = null;
    forAtt[i].classList.remove("green");
    forAtt[i].classList.remove("red");
    forAtt[i].removeAttribute("disabled", "false");
  }
  score = 0;
  submitButton.removeAttribute("disabled", "false");
  message.classList.remove("green");
  message.classList.remove("red");
  message.textContent = "";
});

function selctor() {
  for (var i = forAtt.length - 1; i >= 0; i--) {
    var Value = forAtt[i].value;
    var id = forAtt[i].getAttribute("id");
    if (id === Value) {
      forAtt[i].classList.add("green");

      score++;
    } else {
      forAtt[i].classList.add("red");
    }
    forAtt[i].setAttribute("disabled", "true");
  }
}

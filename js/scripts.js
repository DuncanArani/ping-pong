$(document).ready(function() {
  $("form#exp").submit(function(event) {
    event.preventDefault();
    $("#divide").empty()
    var input = parseInt($("input#Number").val());
    var output = pingpong(input)
//     function myFunction() {
//     divide.reload();
// }
  })
})
var pingpong = function(input) {
  for (p = 1; p <= input; p++) {
    if (p % 15 === 0) {
      var li = "<li>" + "pingpong" + "</li>"
    } else if (p % 3 === 0) {
      var li = "<li>" + "ping" + "</li>"
    } else if (p % 5 === 0) {
      var li = "<li>" + "pong" + "</li>"
    } else {
      var li = "<li>" + p + "</li>"
    }
    $("#divide").append(li);
  }
}

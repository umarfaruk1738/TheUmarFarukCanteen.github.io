alert("YOU ARE WELCOME TO THE CANTEEN")


function myFunction() {
    var txt;
    if (confirm("Have a nice day!")) {
      txt = "You pressed Leave!";
    } else {
      txt = "You pressed Cancel!";
    }
    document.getElementById("demo").innerHTML = txt;
  }
function isChecked() {
  var id = event.srcElement.id;
  if (parseInt(id) >= 1 && parseInt(id) <= 7) {
    if (document.getElementById(id).checked) {
      document.getElementById("2" + id).disabled = true;
      document.getElementById("3" + id).disabled = true;
      clear(document.getElementById("3" + id));
    } else {
      document.getElementById("2" + id).disabled = false;
      document.getElementById("3" + id).disabled = false;
    }
  }
  var i = parseInt(id) - 20;
  if (parseInt(id) >= 21 && parseInt(id) <= 27) {
    if (document.getElementById(id).checked) {
      document.getElementById(i.toString()).disabled = true;
      document.getElementById("1" + i.toString()).disabled = true;
      clear(document.getElementById("1" + i.toString()));
    } else {
      document.getElementById(i.toString()).disabled = false;
      document.getElementById("1" + i.toString()).disabled = false;
    }
  }
}
function isValid() {
  var id = document.getElementById(event.srcElement.id);
  var input = id.value;
  if (isNaN(input) || input == "" || input > 100 || input < 0) {
    console.log("invalid input");
    error(id);
  } else {
    noerror(id);
  }
}
function isValid2() {
  var id = document.getElementById(event.srcElement.id);
  var input = id.value;
  if (isNaN(input) || input == "" || input < 0) {
    error(id);
  } else {
    noerror(id);
  }
}
function error(id) {
  id.style.borderColor = "red";
  id.style.color = "red";
  id.style.boxShadow =
    "inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(255, 0, 0, 0.6)";
}
function noerror(id) {
  id.style.borderColor = "blue";
  id.style.color = "black";
  id.style.boxShadow =
    "inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(0, 0, 255, 0.6)";
}
function clear(id) {
  id.style = "none";
  id.value = "";
}

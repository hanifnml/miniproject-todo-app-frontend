/* Dropdown */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

const clickAction = (e, message, location) => {
  e.preventDefault()
  if (message !== "") {
    window.alert(message)
  }
  window.location.href = location
}

const forgetPassword = (e) => {
  e.preventDefault();
  window.alert("Link pergantian password telah dikirimkan ke email anda!")
  window.location.href = "/reset.html"
}

const resetPassword = (e) => {
  e.preventDefault();
  window.alert("Password berhasil diganti")
  window.location.href = "/dashboard.html"
}

const register = (e) => {
  e.preventDefault();
  window.alert("Registrasi akun berhasil")
  window.location.href = "/dashboard.html"
}
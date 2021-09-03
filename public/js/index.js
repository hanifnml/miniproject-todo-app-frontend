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
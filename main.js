function changeView(type) {
  const path = window.location.pathname;

  if (type === "home") {
    if (path === '/trabajoJS/index.html') {
      document.body.style.backgroundColor = "red";
      return false;
    } else {
      window.location.href = "index.html";
    }
  } else if (type === "register") {
    if (path === '/trabajoJS/register.html') {
      document.body.style.backgroundColor = "green";
      return false;
    } else {
      window.location.href = "register.html";
    }
  } else {
    window.location.href = "routes.html";

  }
}
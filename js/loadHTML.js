async function loadHeader() {
    const res = await fetch("header.html");
    const html = await res.text();
    document.getElementById("header").innerHTML = html;
}

function h1HeaderNavbarHelp() {
    const h1 = document.getElementById("h1-header");
    const notiz = document.getElementById("h1-header-notiz");
    if (h1) {
        h1.innerText = "Hilfe";
    }
    if(notiz) {
        notiz.innerText = "Anleitungen und Tutorials.";
    }
}

function highlightActiveNavLink() { 
   document.querySelectorAll(".nav-link").forEach(link => {
  const href = link.getAttribute("href");
  link.classList.toggle("active", href === location.pathname.split("/").pop());
});
}
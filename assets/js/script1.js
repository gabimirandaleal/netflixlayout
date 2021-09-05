function mostrarNavMenu() {
    const nav = document.getElementById('nav')
    nav.classList.toggle('active')
}

document.getElementById("btn-sandwich").addEventListener("click", mostrarNavMenu);
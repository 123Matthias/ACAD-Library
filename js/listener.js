async function loadNavbarListener() {
    const toggler = document.querySelector('.navbar-toggler');
    const menu = document.getElementById('mainNavbar');
    menu.addEventListener('shown.bs.collapse', () => {
        toggler.querySelector('.fa-bars').classList.add('d-none');
        toggler.querySelector('.fa-xmark').classList.remove('d-none');
    });

    menu.addEventListener('hidden.bs.collapse', () => {
        toggler.querySelector('.fa-bars').classList.remove('d-none');
        toggler.querySelector('.fa-xmark').classList.add('d-none');
    });

}

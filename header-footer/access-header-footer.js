async function includeHTML() {
    document.getElementById("header").innerHTML = await fetch('/header-footer/header.html').then(res => res.text());
    document.getElementById("footer").innerHTML = await fetch('/header-footer/footer.html').then(res => res.text());
}
includeHTML();

function toggleMenu() {
    document.getElementById('main-nav').classList.toggle('active');
}

/*
<link rel="stylesheet" href="/header-footer/header-footer.css"> 

<div id="header"></div>

<div id="footer"></div>
<script src="/header-footer/access-header-footer.js"></script>
<script src="https://kit.fontawesome.com/eaa5e9c69b.js" crossorigin="anonymous"></script>
*/
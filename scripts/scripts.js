async function loadHeader() {
  const headerContainer = document.getElementById('header-container');
  const response = await fetch('../componentes/header.html');
  const headerHTML = await response.text();
  headerContainer.innerHTML = headerHTML;
}

document.addEventListener('DOMContentLoaded', loadHeader);
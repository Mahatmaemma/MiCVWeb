document.addEventListener('DOMContentLoaded', () => {
    const footer = document.createElement('footer');
    const year = new Date().getFullYear();

    footer.textContent = `Actualizado en ${year}`;
    document.body.appendChild(footer);

    console.log('script.js cargado correctamente');
});

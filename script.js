// Animación de las secciones al bajar la página.
if ('IntersectionObserver' in window) {
    document.documentElement.classList.add('js');
    const secciones = document.querySelectorAll('.panel');
    const observador = new IntersectionObserver(function(entradas) {
        entradas.forEach(function(entrada) {
            if (entrada.isIntersecting) {
                entrada.target.classList.add('visible');
                observador.unobserve(entrada.target);
            }
        });
    }, { threshold: 0.08 });
    secciones.forEach(function(seccion) { observador.observe(seccion); });
}

function mostrarTrayectoria(idTrayectoria) {
  // 1. Buscamos todos los bloques de texto de las empresas
  let bloques = document.querySelectorAll('.trayectoria-bloque');
  
  // 2. Los ocultamos todos aplicando "display: none"
  bloques.forEach(bloque => {
    bloque.style.display = 'none';
  });
  
  // 3. Mostramos únicamente el bloque de la empresa que se ha clicado
  let bloqueSeleccionado = document.getElementById(idTrayectoria);
  bloqueSeleccionado.style.display = 'block';
}
// Función para alternar entre las secciones principales del menú superior
function mostrarSeccion(tipo) {
    document.getElementById('seccion-laboral').style.display = 'none';
    document.getElementById('seccion-formacion').style.display = 'none';
    document.getElementById('seccion-proyectos').style.display = 'none';

    if (tipo === 'laboral') {
        document.getElementById('seccion-laboral').style.display = 'block';
    } else if (tipo === 'formacion') {
        document.getElementById('seccion-formacion').style.display = 'block';
    } else if (tipo === 'proyectos') {
        document.getElementById('seccion-proyectos').style.display = 'block';
    }
}

// Función para alternar entre las empresas de la barra lateral (Vida Laboral)
function mostrarTrayectoria(idBloque) {
    // Ocultar todos los bloques de trayectoria
    const bloques = document.querySelectorAll('.trayectoria-bloque');
    bloques.forEach(bloque => {
        bloque.style.display = 'none';
    });

    // Mostrar el bloque seleccionado
    const bloqueActivo = document.getElementById(idBloque);
    if (bloqueActivo) {
        bloqueActivo.style.display = 'block';
    }
}
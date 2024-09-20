export const formatearCantidad = cantidad => {
    return Number(cantidad).toLocaleString('es-ES', {
        style: 'currency',
        currency:'EUR'
    })
}

export const generarId = () => {
    const fecha = Date.now().toString(36)
    const random = Math.random().toString(36).substring(36)
    return random + fecha
}

export const formatearFecha = fecha => {
    const fechaNueva = new Date(fecha)
    const opciones = {
        year: 'numeric',
        month: 'long',
        day: '2-digit'
    }
    return fechaNueva.toLocaleDateString('es-ES', opciones)
}
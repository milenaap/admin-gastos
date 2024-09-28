<template>
    <div class="filtros sombra contenedor">
        <form>
            <div class="campo">
                <label for="filtro">Filtrar Gastos:</label>
                <select 
                    id="filtro"
                    :value="categoria"
                    @input="$emit('update:filtro', $event.target.value)"
                >
                    <option value="">-- Seleccione --</option>
                    <option value="Ahorro">Ahorro</option>
                    <option value="Comida">Comida</option>
                    <option value="Casa">Casas</option>
                    <option value="Gastos">Gastos Varios</option>
                    <option value="Ocio">Ocio</option>
                    <option value="Salud">Salud</option>
                    <option value="Suscripciones">Suscripciones</option>
                </select>
            </div>

        </form>
    </div>
</template>

<script setup>
    defineProps(['filtro'])
    defineEmits(['update:filtro'])
</script>

<style scoped>


.filtros {
    margin-top: 10rem;
}

.filtros .campo {
    display: flex;
    align-items: center;
    gap: 2rem;
}
.filtros label {
    font-size: 3rem;
    font-weight: 900;
    color: var(--gris-oscuro);
}

.filtros select {
    flex: 1;
    padding: 1rem;
    border: none;
    border-radius: 1rem;
    background-color: var(--gris-claro);
    text-align: center;
}
</style>
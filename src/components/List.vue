<template>
    <section class="list">
        <slot>
        </slot>
    </section>
</template>
<script>
</script>
<style scoped>
.list {
    min-height: 100vh;
    display: flex;
	flex-wrap: wrap;
	justify-content: center;
    align-content: flex-start;
	width: 100%;
}
</style>
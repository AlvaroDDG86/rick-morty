<template>
    {{ id }}
</template>
<script>
export default {
    props: {
        id: {
            type: String,
            default: ''
        }
    }
}
</script>
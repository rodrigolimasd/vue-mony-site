<template>
    <div>
        <input name="street" v-model="value.street">
        <input name="city" v-model="value.city">
        <input name="state" v-model="value.state">
        <input name="zip" v-model="value.zip">
    </div>
</template>
<script>
    export default {
        props: ['modelValue'],
        emits: ['update:modelValue'],
        computed: {
            value: {
                get() {
                    return this.modelValue
                },
                set(value) {
                    this.$emit('update:modelValue', value)
                }
            }
        }
    }
</script>
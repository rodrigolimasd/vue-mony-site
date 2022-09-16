<template>
    <form>
        <input name="name" v-model="name">
        <input name="email" v-model="email">
        <mailing-address v-model="address" />
    </form>
</template>
<script>
    import MailingAddress from './Address.vue';
    export default {
        components: { MailingAddress },
        data() {
            return {
                name: '',
                email: '',
                address: {
                    street: '',
                    city: '',
                    state: '',
                    zip: ''
                }
            }
        }
    }
</script>
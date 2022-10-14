<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-lg-8">
                <div class="col-md-12 mb-4">
                    <div class="card mt-4">
                        <div class="card-header pb-0 p-3">
                            <div class="row">
                            <div class="col-6 d-flex align-items-center">
                                <h6 class="mb-0">Credit Cards</h6>
                            </div>
                            <div class="col-6 text-end">
                                <argon-button color="dark" variant="gradient" @click="addCard">
                                <i class="fas fa-plus me-2"></i>
                                Add New Card
                                </argon-button>
                            </div>
                            </div>
                        </div>
                        <div class="card-body p-3">
                            <div class="row">
                                <div class="col-md-6 mb-2" v-for="i in items" :key="i.finalNumbercard">
                                    <ItemRow :item="i" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ArgonButton from "@/components/ArgonButton.vue";
import ItemRow from "./ItemRow.vue"

export default {
    components: {
      ArgonButton,
      ItemRow
    },
    computed: {
        items() {
            return this.$store.state.creditcard.creditCards
        }
    },
    methods: {
        addCard() {
        this.$router.push("/creditcard/new")
      }
    }
}
</script>
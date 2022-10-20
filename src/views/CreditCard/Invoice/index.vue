<template>
     <div class="container-fluid">
        <div class="row">
            <div class="col-lg-8">
                <div class="row mt-4">
                    <div class="col-12">
                        <div class="card pb-4">
                            <div class="card-header pb-0 p-3">
                                <div class="row">
                                    <div class="col-4 d-flex align-items-center">
                                        <h4 class="mb-0">Invoices</h4>
                                    </div>
                                    <div class="col-8 text-end">
                                        <argon-button color="default"
                                                @click="back"
                                                variant="gradient" class="me-2">
                                            <i class="fas fa-arrow-left me-2"></i>
                                            Back
                                        </argon-button>
                                        <argon-button 
                                            @click="addAccount"
                                            color="dark" variant="gradient">
                                            <i class="fas fa-plus me-2"></i>
                                            Add New Invoice
                                        </argon-button>
                                        <argon-button class="mx-2"
                                            @click="saveStorage"
                                            color="success" variant="gradient">
                                            <i class="fas fa-check"></i>
                                            Save
                                        </argon-button>
                                    </div>
                                </div>
                            </div>
                            <div class="card-body p3 pb-0 mb-0">
                                <ul class="nav nav-tabs">
                                    <li class="nav-item">
                                        <a class="nav-link active" aria-current="page" href="#">November/2022</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#">December/2022</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#">January/2023</a>
                                    </li>
                                </ul>
                            </div>
                            <div class="card-footer pt-4">
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-6">
                        <div class="row">

                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>

import ArgonButton from "@/components/ArgonButton.vue"
export default {
    props:['id'],
    components: {
        ArgonButton
    },
    methods: {
        back() {
            this.$router.push("/creditcard")
        }
    }
}
</script>
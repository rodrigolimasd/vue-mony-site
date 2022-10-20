<template>
     <div class="container-fluid">
        <div class="row">
            <div class="col-lg-8">
                <div class="row mt-4">
                    <div class="col-12">
                        <div class="card pb-4">
                            <div class="card-header pb-0 p-3">
                                <div class="row">
                                    <div class="col-6 d-flex align-items-center">
                                        <h4 class="mb-0">Invoices</h4>
                                    </div>
                                    <div class="col-6 text-end">
                                        <argon-button 
                                            @click="addAccount"
                                            color="dark" variant="gradient">
                                            <i class="fas fa-plus me-2"></i>
                                            Add New Invoice
                                        </argon-button>
                                        <argon-button class="mx-2"
                                            @click="saveStorage"
                                            color="success" variant="gradient">
                                            <i class="fas fa-check me-2"></i>
                                            Save
                                        </argon-button>
                                    </div>
                                </div>
                            </div>
                            <div class="card-body p3 pb-0 mb-0">
                             
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
    } 
}
</script>
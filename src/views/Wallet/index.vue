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
                                        <h6 class="mb-0">Accounts</h6>
                                    </div>
                                    <div class="col-6 text-end">
                                        <argon-button 
                                            @click="addAccount"
                                            color="dark" variant="gradient">
                                            <i class="fas fa-plus me-2"></i>
                                            Add New Account
                                        </argon-button>
                                    </div>
                                </div>
                            </div>
                            <div class="card-body p3 pb-0 mb-0">
                                <div class="row">
                                    <div v-for="(a, i) in accounts" :key="'cc'+i" class="col-md-3">
                                        <account-card v-model="accounts[i]" />
                                    </div> 
                                </div>
                            </div>
                            <div class="card-footer pt-4">
                                <div class="row">
                                    <div class="col">
                                        <argon-button
                                            color="success"
                                            variant="outline"
                                            size="sm"
                                            class="btn-icon-only btn-rounded mb-0 me-3 d-flex align-items-center justify-content-center"
                                            >
                                            <i class="fas fa-arrow-up" aria-hidden="true"></i>
                                        </argon-button>
                                        <small class="text-black opacity-8">+$5456.00</small>
                                        <div class="progress progress-xs my-2">
                                            <div class="progress-bar bg-success" style="width: 60%"></div>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <argon-button
                                            color="danger"
                                            variant="outline"
                                            size="sm"
                                            class="btn-icon-only btn-rounded mb-0 me-3 d-flex align-items-center justify-content-center"
                                            >
                                            <i class="fas fa-arrow-down" aria-hidden="true"></i>
                                        </argon-button>
                                        <small class="text-black opacity-8">-$4326.32</small>
                                        <div class="progress progress-xs my-2">
                                            <div class="progress-bar bg-warning" style="width: 40%"></div>
                                        </div>
                                    </div>
                                </div>
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
import AccountCard from "@/components/cards/AccountCard.vue"
import ArgonButton from "@/components/ArgonButton.vue"


export default {
    name: "Wallet",
    components: {
        AccountCard,
        ArgonButton
    },
    data() {
        return {
            accounts: [
                {
                    classIcon: "text-white fas fa-landmark",
                    title: "Mercado Pago",
                    desc: "Checking Account",
                    amount: "8000",
                    editable: false
                },
                {
                    classIcon: "text-white fab fa-paypal",
                    title: "Paypal",
                    desc: "Freelance Payment",
                    amount: "1346",
                    editable: false
                }
            ]
        }
    },
    methods: {
        addAccount() {
            this.accounts.splice(0, 0, {
                classIcon: "text-white fas fa-landmark",
                title: "Teste",
                desc: "Checking Account",
                amount: "100",
                editable: true
            })
        }
    }
}


</script>
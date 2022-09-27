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
                                <div class="row">
                                    <div v-for="(a, i) in accounts" :key="'cc'+i" class="col-md-3">
                                        <account-card v-model="accounts[i]" @account-delete="removeAccount" />
                                    </div> 
                                </div>
                            </div>
                            <div class="card-footer pt-4">
                                <div class="row">
                                    <div class="col-6">
                                        <card-total-balance :total="totalBalance" />
                                    </div>
                                    <div class="col-6">
                                        <card-last-balance :total="lastBalance" />
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col">
                                        <card-diff-balance :amount="totalVSLast()" />
                                    </div>
                                    <div class="col">
                                        <card-diff-balance :amount="lastVsTotal()" />
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
import CardTotalBalance from "../../components/cards/CardTotalBalance.vue"
import CardLastBalance from "../../components/cards/CardLastBalance.vue"
import CardDiffBalance from "../../components/cards/CardDiffBalance.vue"
import { mapMutations, mapGetters } from 'vuex'


export default {
    name: "Wallet",
    components: {
        AccountCard,
        ArgonButton,
        CardTotalBalance,
        CardLastBalance,
        CardDiffBalance
    },
    computed: {
        accounts() {
            return this.$store.state.wallet.accounts
        },
        ...mapGetters({
            totalBalance: 'totalBalance',
            lastBalance: 'lastBalance'
        })
    },
    methods: {
        ...mapMutations([
            "addAccount",
            "saveStorage",
            "removeAccount"
        ]),
        totalVSLast(){
            let cal = Number(this.totalBalance) - Number(this.lastBalance)
            return cal.toFixed(2)
        },
        lastVsTotal(){
            let cal = Number(this.lastBalance) - Number(this.totalBalance)
            return cal.toFixed(2)
        }
    }
}


</script>
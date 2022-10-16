<template>
    <div class="container-fluid mt-4">
        <div class="row">
            <div class="col-md-8">
            <div class="card">
                <div class="card-header pb-0">
                    <div class="d-flex align-items-center">
                        <p class="mb-0">New Credit Card</p>
                       <div class="ms-auto">
                        <argon-button color="default"
                                @click="back"
                                variant="gradient" class="ms-1">
                            <i class="fas fa-arrow-left me-2"></i>
                            Back
                        </argon-button>
                        <argon-button color="success"
                                @click="save"
                                variant="gradient" class="ms-1 float-end">
                            <i class="fas fa-check me-2"></i>
                            Save
                        </argon-button>
                       </div>
                    </div>
                </div>
                <div class="card-body">
                    <p class="text-uppercase text-sm">Card Information</p>
                    <div class="row">
                        <div class="col-md-8">
                            <label for="name" class="form-control-label">Name</label>
                            <input name="name" type="text" placeholder="Card Nickname" 
                                        class="form-control form-control-default"
                                        v-model="creditCard.name" />
                        </div>
                        <div class="col-md-4">
                            <label for="finalNumber" class="form-control-label">Final Number</label>
                            <input name="finalNumber" type="number" placeholder="Final Number" 
                                        class="form-control form-control-default"
                                        v-model.lazy="creditCard.finalNumberCard" />
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-4">
                            <label for="flagCard" class="form-control-label">Flag Card</label>
                            <select name="flagCard" class="form-select" v-model="creditCard.cardFlag">
                                <option value="mastercard"> Mastercard</option>
                                <option value="visa">Visa</option>
                            </select>
                        </div>
                        <div class="col-md-4">
                            <label for="expirationDay" class="form-control-label">Expiration Day</label>
                            <input name="expirationDay" type="number" placeholder="Expiration Day" 
                                        class="form-control form-control-default"
                                        v-model="creditCard.expirationDay" />
                        </div>
                        <div class="col-md-4">
                            <label for="closingDay" class="form-control-label">Closing Day</label>
                            <input name="closingDay" type="number" placeholder="Closing Day" 
                                        class="form-control form-control-default"
                                        v-model="creditCard.closingDay" />
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-4">
                            <label for="limit" class="form-control-label">Limit</label>
                            <input name="limit" type="text" placeholder="Limit" 
                                        class="form-control form-control-default"
                                        v-decimal
                                        v-model="creditCard.limit" />
                        </div>
                        <div class="col-md-4">
                            <label for="pointsPerValue" class="form-control-label">Points Per Value</label>
                            <input name="pointsPerValue" type="text" placeholder="Points Per Value" 
                                        class="form-control form-control-default"
                                        v-decimal
                                        v-model="creditCard.pointsPerValue" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <credit-card :nameCard="creditCard.name"
                    :finalNumberCard="creditCard.finalNumberCard"
                    :cardFlag="creditCard.cardFlag" />
        </div>
        </div>
    </div>
    
</template>

<script>

import ArgonButton from "@/components/ArgonButton.vue";
import CreditCard from "@/components/cards/CreditCard.vue";
import { mapMutations } from 'vuex'

export default {
    components: { 
        ArgonButton,
        CreditCard 
    },
    props:['id'],
    data() {
        return {
            creditCard: {
            }
        }
    },
    methods: {
        ...mapMutations([
            'addCreditCard',
            'updateCreditCard'
        ]),
        save() {
            if(this.id) {
                this.updateCreditCard()
            } else {
                this.addCreditCard(this.creditCard)
            }
            this.$router.push("/creditcard")
        },
        back() {
            this.$router.push("/creditcard")
        }
    },
    mounted() {
        if(this.id) {
          this.creditCard = this.$store.state.creditcard.creditCards
                .find(a=> a.id === Number(this.id))
        }
    }

}
</script>
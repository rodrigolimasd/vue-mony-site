<template>
    <div class="container-fluid mt-4">
        <div class="row">
            <div class="col-md-8">
            <div class="card">
                <div class="card-header pb-0">
                    <div class="d-flex align-items-center">
                        <p class="mb-0">New Credit Card</p>
                        <argon-button color="success" size="sm" class="ms-auto">Save</argon-button>
                    </div>
                </div>
                <div class="card-body">
                    <p class="text-uppercase text-sm">Card Information</p>
                    <div class="row">
                        <div class="col-md-8">
                            <label for="name" class="form-control-label">Name</label>
                            <argon-input name="name" type="text" placeholder="Card Nickname" />
                        </div>
                        <div class="col-md-4">
                            <label for="finalNumber" class="form-control-label">Final Number</label>
                            <argon-input name="finalNumber" type="text" placeholder="Final Number" />
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-4">
                            <label for="flagCard" class="form-control-label">Flag Card</label>
                            <select name="flagCard" class="form-select">
                                <option value="mastercard"> Mastercard</option>
                                <option value="visa">Visa</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <master-card />
        </div>
        </div>
    </div>
    
</template>

<script>

import ArgonInput from "@/components/ArgonInput.vue";
import ArgonButton from "@/components/ArgonButton.vue";
import MasterCard from "@/components/cards/MasterCard.vue";

export default {
    components: { 
        ArgonInput,
        ArgonButton,
        MasterCard 
    },

}
</script>
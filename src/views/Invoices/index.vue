<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-lg-8">
                <div class="col-md-12 mb-4">
                    <credit-cards />
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import CreditCards from "./CreditCards";
export default {
    components: {
        CreditCards
    },
    data() {
        return {
        }
    }
}
</script>
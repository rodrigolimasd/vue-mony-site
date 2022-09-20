<template>
    <div class="card">

        <div class="card-header text-center">
           <div class="row">
                <div class="col6 d-flex align-items-center">
                    <h6 class="mb-0" :class="[total > 0 ? 'text-success' : 'text-warning']">Total Balance</h6>
                </div>
           </div>
        </div>
        <div class="card-body p-3">
            <div class="row">
                <div class="col-md-6 mb-md-0 mb-4">
                    <div class="card card-body border card-plain border-radius-lg d-flex align-items-center flex-row">
                        <h6 class="mb-0">${{ total }}</h6>
                    </div>
                </div>
            </div>

        </div>

    </div>
</template>

<script>
    export default {
        name: 'card-total-balance',
        props: ['total']
    }
</script>
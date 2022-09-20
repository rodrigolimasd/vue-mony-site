<template>
    <div class="mb-4 card">
      <div class="p-3 card-body">
        <div class="d-flex flex-row-reverse justify-content-between">
          <div>
            <div class="text-center icon icon-shape bg-gradient-success border-radius-2xl">
              <i class="text-lg opacity-10 ni ni-money-coins" aria-hidden="true"></i>
            </div>
          </div>
          <div :class="contentClass">
            <div class="numbers">
              <p class="mb-0 text-sm text-uppercase font-weight-bold">Total Balance</p>
              <h5 class="font-weight-bolder" :class="[total > 0 ? 'text-success' : 'text-warning']">${{ total }}</h5>
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
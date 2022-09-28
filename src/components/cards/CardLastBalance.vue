<template>
    <div class="mb-4 card">
      <div class="p-3 card-body">
        <div class="d-flex justify-content-between">
          <div>
            <div class="text-center icon icon-shape bg-gradient-warning border-radius-2xl">
              <i class="text-lg opacity-10 fas fa-piggy-bank" aria-hidden="true"></i>
            </div>
          </div>
          <div :class="contentClass">
            <div class="numbers">
              <p class="mb-0 text-sm text-uppercase font-weight-bold">Last Balance - Expected</p>
              <h5 class="font-weight-bolder text-end" :class="[total > 0 ? 'text-success' : 'text-warning']">${{ total }}</h5>
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
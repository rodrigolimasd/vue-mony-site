<template>
    <div class="card">
      <div class="mt-2 mb-0 mx-2 d-flex flex-row-reverse">
        <button v-if="value.editable" @click="changeEditable(value)"
            class="p-1 mb-0 btn btn-outline-info btn-xs"
            type="button"
            data-bs-toggle="tooltip"
            title="save">
            <i class="p-1 fas fa-check"></i>
        </button>
        <button v-if="!value.editable" @click="changeEditable(value)"
            class="p-1 mb-0 btn btn-outline-secondary btn-xs"
            type="button"
            data-bs-toggle="tooltip"
            title="save">
            <i class="p-1 fas fa-edit"></i>
        </button>

      </div>
      <div v-if="!value.editable" class="p-3 mx-4 text-center card-header">
        <div  class="bg-white icon icon-shape icon-md bg-gradient-success shadow text-center border-radius-lg">
          <i class="opacity-10 text-white fas" :class="value.classIcon" aria-hidden="true"></i>
        </div>
      </div>
      <div v-else class="p-3 mx-0 text-center card-header" >
        <select class="form-select" v-model="value.classIcon">
          <option value="fa-landmark"><i class='fa fa-landmark'></i> Bank</option>
          <option value="fa-wallet">Wallet</option>
          <option value="fa-credit-card">Credit Card</option>
        </select>
      </div>
      <div v-if="!value.editable" class="p-3 pt-0 text-center card-body">
        <h6 class="mb-0 text-center">{{ value.title  }}</h6>
        <span class="text-xs">{{ value.desc }}</span>
        <hr class="my-3 horizontal dark" />
        <h5 class="mb-0">${{ value.amount }}</h5>
      </div>
      <div v-else class="p-3 pt-0 text-center card-body">
        <input type="text" class="form-control form-control-sm text-bold text-center text-lg" 
               name="title" 
               v-model="value.title" />
        <input type="text" class="form-control form-control-sm text-xs mt-1 text-center" 
               name="title" 
               v-model="value.desc" />
        <hr class="horizontal dark" :class="[value.editable ? 'my-2' : 'my-3']" />
        <input type="text" class="form-control form-control-sm text-bold mt-1 text-center text-lg" 
               name="title" 
               v-model="value.amount" v-decimal/>

      </div>
    </div>
  </template>
  
  <script>
    export default {
        props: ['modelValue'],
        emits: ['update:modelValue'],
        computed: {
          value: {
              get() {
                  return this.modelValue
              },
              set(value) {
                  this.$emit('update:modelValue', value)
              }
          }
        }, 
        methods: {
          changeEditable(value) {
            value.editable = !value.editable
            this.$emit('update:modelValue', value)
          }
        }
    }
  </script>
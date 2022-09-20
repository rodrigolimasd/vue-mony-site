<template>
    <div class="card">
      <div class="mt-2 mb-0 mx-2 d-flex flex-row-reverse">
        <button v-if="value.editable" @click="changeEditable(value)"
            class="btn btn-xs m-0 px-2 py-1 bg-gradient-success"
            type="button"
            data-bs-toggle="tooltip"
            title="Save changes">
            <i class="p-0 fas fa-check"></i>
        </button>

        <div v-if="!value.editable" class="dropdown float-end">
          <button class="btn btn-xs dropdown-toggle m-0 px-2 py-1 bg-gradient-default" type="button" 
                  data-bs-toggle="dropdown" aria-expanded="false">
           </button>

            <ul class="dropdown-menu">
              <li>
                <button class="dropdown-item" type="button" @click="changeEditable(value)">
                    <i class="fa fa-edit"></i> <span> Edit </span>
                </button>
              </li>
              <li>
                <button class="dropdown-item" type="button" @click="$emit('account-delete', value)">
                  <i class="fa fa-trash"></i> <span> Remove </span>
                  </button>
              </li>
            </ul>
        </div>

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
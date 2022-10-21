<template>
  <div class="card h-100 p-3">
    <div
      class="overflow-hidden position-relative border-radius-lg bg-cover h-100"
      :style="{backgroundImage: 'url(' + require('@/assets/img/ivancik.jpg') + ')'}"
    >
      <span class="mask bg-gradient-dark"></span>
      <div class="card-body position-relative z-index-1 p-3 h-100">
        <div class="d-flex flex-column h-100">
          <h5 class="text-white font-weight-bolder mb-4 pt-2">Working with missiles</h5>
          <p
            class="text-white mb-5"
          >Wealth formation is a modern evolutionary game with a positive outcome. It's all about who seizes the chance first. This is a simple card.</p>
          <a
            class="text-white font-weight-bold ps-1 mb-0 icon-move-left mt-auto"
            href="javascript:;"
          >
          Read the documents
            <i class="fas fa-arrow-left text-sm ms-1" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "rocket-card",
};
</script>

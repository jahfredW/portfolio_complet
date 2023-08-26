<template>
  <div class="about w-100">
    <h1 class="text-4xl font-bold text-center align-center text-blue-600 mt-10">Page en construction...</h1>
  </div>
  <div class="loading flex flex-column align-center justify-begin pb-12">
        <i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i>

    </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 50vh;
    /* display: flex;
    align-items: center; */
  }
}

.loading {
    display: grid;
    place-content: center;
    background: rgba(0, 0, 0, 0.3);
    z-index: 999;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }

</style>

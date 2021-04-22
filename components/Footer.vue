<template>
  <div class="w-full bg-gray-100 text-gray-500 text-xs mt-2">
    <div class="xl:px-40 pb-12 lg:px-20 md:px-10 sm:px-5 px-10">
      <div
        class="w-full pt-12 flex flex-col sm:flex-row space-y-2 justify-start"
      >
        <div class="w-full sm:w-2/5 pr-6 flex flex-col space-y-4">
          <h1>
            <span class="text-2xl font-black leading-3 text-gray-900"
              >TY:BR</span
            >
            <sup class="text-gray-900">beta</sup>
          </h1>
          <p class="opacity-60">
            Strada Gheorghe Doja, 56, apt. 2 Timișoara, 300222 Romania
          </p>
        </div>
        <div class="w-full sm:w-1/5 flex flex-col space-y-4">
          <a class="opacity-60">About Us</a>
          <a class="opacity-60">Contact</a>
        </div>
        <div class="w-full sm:w-1/5 flex flex-col space-y-4">
          <a class="opacity-60">Disclaimer</a>
          <a class="opacity-60">Privacy Policy</a>
          <a class="opacity-60">Terms of Service</a>
        </div>
        <div class="w-full sm:w-1/5 pt-6 flex items-end mb-1">
          <div class="flex flex-row space-x-4">
            <i class="fab fa-facebook-f"></i>
            <font-awesome-icon :icon="['fas', 'fa-facebook-square']" />
            <i class="fab fa-facebook-square"></i>
            <i class="fab fa-twitter"></i>
            <i class="fab fa-instagram"></i>
            <i class="fab fa-google"></i>
          </div>
        </div>
      </div>
      <div class="opacity-60 pt-2">
        <p>©2020 Created with &#9829; by blaeuAtlas SRL</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<template>
  <div
    class="shadow-2xl rounded-none h-60 w-40 p-2 pt-4 bg-white dark:bg-gray-800 relative overflow-hidden m-0 mt-4"
  >
    <a href="#" class="w-full h-full block">
      <div class="w-full flex items-center">
        <a href="#" class="flex w-full block relative items-center">
          <img
            src="/images/profile-f-1.png"
            class="mx-auto object-cover rounded-full h-20 w-20 mb-4"
          />
        </a>
      </div>
      <p class="dark:text-white font-bold text-center text-xs text-black "> Mari Charlie </p>
      <p class="text-xs mt-2 text-center text-black mt-2">You have mutual friends on TYBR. </p>
      <div class="flex justify-center mt-6 "><button class="bg-blue-500 hover:bg-blue-500 text-white text-xs font-bold py-2 px-4 rounded-none w-60">
        Follow
      </button></div>

    </a>
  </div>
</template>

<script>
export default {
  name: "SimpleTaskCard",
};
</script>

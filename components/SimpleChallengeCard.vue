<template>
  <div
    class="shadow-2xl rounded-3xl h-96 w-72 p-4 bg-white dark:bg-gray-800 relative overflow-hidden mt-4 bg-gradient-to-t from-purple-400 via-pink-500 to-red-500"
  >
    <a href="#" class="w-full h-full block">
      <div class="w-full flex items-center">
        <!--        <a href="#" class="block relative">-->
        <!--          <img alt="profil" src="/images/profile-f-1.png" class="mx-auto object-cover h-10 w-10 "/>-->
        <!--        </a>-->
        <div class="flex flex-col ml-0">
          <span class="text-white font-black"> CHALLENGE: 3x5 </span>
          <span class="text-gray-400 text-xs dark:text-gray-300"> </span>
        </div>
      </div>
      <div class="flex items-center justify-between my-4 mt-3">
        <p class="text-white font-normal text-xs font-light">
          You've completed 2 activities that count for the challenge. 3 more to
          go!
        </p>
      </div>
      <div class="w-full h-2 bg-gray-200 rounded-full">
        <div
          class="w-2/3 h-full text-center text-xs text-white bg-blue-600 bg-gradient-to-r from-green-300 via-green-400 to-green-500 rounded-full"
        ></div>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name: "SimpleTaskCard",
};
</script>

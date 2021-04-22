<template>
  <div
    class="shadow-2xl rounded-3xl h-96 w-72 p-4 bg-white dark:bg-gray-800 relative overflow-hidden m-0 mt-4"
  >
    <a href="#" class="w-full h-full block">
      <div class="w-full flex items-center">
        <a href="#" class="block relative">
          <img
            alt="profil"
            src="/images/profile-f-1.png"
            class="mx-auto object-cover rounded-full h-10 w-10"
          />
        </a>
        <div class="flex flex-col ml-2">
          <span class="dark:text-white font-semibold"> Mari Charlie </span>
          <span class="text-gray-400 text-xs dark:text-gray-300">
            @marebeirut
          </span>
        </div>
      </div>
      <div class="flex items-center justify-between my-2 mt-3">
        <p class="text-gray-400 font-normal text-xs font-extrabold">
          <span>Genesis</span> 34 of 50 chapters completed!
        </p>
      </div>
      <div class="w-full h-2 bg-gray-200 rounded-full">
        <div
          class="w-2/3 h-full text-center text-xs text-white bg-blue-600 bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 rounded-full"
        ></div>
        <div class="mt-3 float-right">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-3 w-3"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              class="text-gray-400"
              d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z"
            />
          </svg>
        </div>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name: "SimpleTaskCard",
};
</script>

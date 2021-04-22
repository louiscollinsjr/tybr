<template>
  <div class="text-left">
    <section
      class="safe-top safe-left safe-right safe-bottom mx-4 border-b border-gray-100 mb-8 py-4"
    >
      <div class="h-20 w-full">
        <div class="flex space-x-4 flex justify-center items-center">
          <div class="flex h-16 pt-8">
            <h1>
              <span class="text-2xl font-black leading-3 text-gray-900"
                >TY:BR</span
              >
              <sup class="text-gray-300">beta</sup>
            </h1>
          </div>
          <!-- <div class="flex"></div> -->
          <div class="flex-1 flex justify-end h-16 pt-4 pr-6">
            <img
              class="object-cover rounded-full h-12 w-12 float-right"
              src="~/static/images/profile-f-1.png"
            />
          </div>
        </div>

        <p class="text-sm p-4"></p>
      </div>
    </section>

    <section>
      <div class="w-full bg-gray-100 m-0">
        <p class="text-xs p-2 text-black">
          <b>Information area:</b> Welcome to Track Your bible reading.
        </p>
      </div>
      <div class="w-full bg-purple-100">
        <p class="text-xs p-2 text-black">
          <b>Sample information area:</b> Welcome to Track Your bible reading.
          Here ia quick look at your stats.
        </p>
      </div>
    </section>
    <section class="safe-top safe-left safe-right safe-bottom mx-4">
      <div class="mt-16">
        <p
          class="font-black text-3xl my-2 tracking-normal leading-7 text-black"
        >
          Stories<br />
          <!-- <span class="font-normal text-xs my-2 tracking-wide"
            >Personal & Team updates, and more...</span
          > -->
        </p>
      </div>
    </section>

    <section class="">
      <div
        class="flex overflow-auto clear-left no-scrollbar h-96 transform"
        style="height: 460px"
      >
        <div class="mx-3"><SimpleChallengeCard /></div>
        <div v-for="n in 5" :key="n" class="text-gray-400 font-light p-0 mb-0">
          <div class="p-0.5 flex mr-4" style="float: left">
            <SimpleTaskCard />
          </div>
        </div>
      </div>
    </section>

    <section class="mt-6 pt-6 bg-gray-100 pb-16">
      <div class="safe-top safe-left safe-right safe-bottom mx-4">
        <p class="font-black text-3xl my-2 tracking-normal">
          Track your Bible Reading<br />
          <span class="font-normal text-xs my-2 tracking-wide"
            >As you read the Bible, mark off each chapter</span
          >
        </p>
        <div
          class="mt-6 text-xs grid grid-cols-2 grid-rows-5 grid-flow-col gap-3 p-0"
        >
          <div
            v-for="category in categories"
            :key="category.id"
            class="rounded-xl bg-white appleDarkGrayX text-black font-bold p-3 text-base bg-cover bg-no-repeat bg-bottom"
          >
            {{ category.category_name }}
            <div class="text-gray-800 font-medium justify-start mt-4">
              <book-card
                :books="books_a"
                :squareColor="'justify-center items-center m-px bg-gray-50x  rounded-none'"
                :squareWidth="''"
              />
            </div>
          </div>
          <!--      <div v-for="book in books" :key="book.id" class="h-11 w-11 rounded-none flex text-xs text-gray-400 justify-center items-center m-px" style="float:left" :class="squareColor">-->
          <!--        {{ book.book_abbreviation}} {{book.name}}-->
          <!--      </div>-->
        </div>
      </div>
    </section>

    <section class="bg-gray-200 h-80 shadow-inner pt-4">
      <p class="mx-4 font-medium text-xl">Connections</p>
      <div
        class="flex overflow-auto clear-left no-scrollbar h-96 transform"
        style="height: 460px">
        <div v-for="n in 10" :key="n" class="text-gray-400 font-light p-0 mb-0">
          <div class="mx-4" style="float: left">
            <ConnectFriends />
          </div>
        </div>
      </div>
    </section>

    <Footer />
    <!-- <section>
      <div class="mb-28 float-left">
        <p
          class="text-white text-lg font-black my-4 mb-3 mt-20"
          style="clear: left"
        >
          All books
        </p>
        <book-card
          :books="books"
          :squareColor="'bg-gray-100 border-white p-px'"
          :squareWidth="'w-80 font-bold text-xl'"
        />
      </div>

      <br />
      <p
        class="text-black text-lg font-black my-4 mb-3 leading-5 mt-20 clear-both"
      >
        Creation and early <br />human history
      </p>
      <book-card
        :books="books_a"
        :squareColor="'bg-gray-100 border-white p-px'"
        :squareWidth="'w-80 font-bold text-xl'"
      />
      <p
        class="text-black text-lg font-black my-6 mb-3 leading-5 clear-left mt-20"
      >
        Settling in the Promised Land
      </p>
      <book-card
        :books="books_b"
        :squareColor="'bg-yellow-100 border-white p-px text-yellow-300 '"
        :squareWidth="'w-80 '"
      />

      <br /><br /><br />
    </section> -->
  </div>
</template>

<script>
import books from "~/data/books";
import categories from "~/data/categories.json";

export default {
  head() {
    return {
      title: "Homepage",
      meta: [
        {
          name: "description",
          content: "This is a homepage",
          hid: "description",
        },
      ],
    };
  },
  data() {
    return {
      books_a: books.slice(0, 5),
      books_b: books.slice(5, 8),
      books: books,
      categories: categories,
    };
  },
};
</script>

<!--grid grid-cols-3 grid-rows-1 gap-1 lg:grid-flow-col -->
<!--    <p class="text-lg font-black my-16 mb-3 leading-5">Feed.</p>-->
<!--  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-1 overflow-auto">-->
<!--      <div class="m-2 ml-0"><SimpleChallengeCard /></div>-->
<!--      <div class="m-2"><SimpleTaskCard /></div>-->
<!--      <div class="m-2"><SimpleTaskCard /></div>-->
<!--      <div class="m-2"><SimpleTaskCard /></div>-->
<!--      <div class="m-2"><SimpleTaskCard /></div>-->
<!--    </div>-->

<!-- <div class="h-60 w-24 p-0.5 rounded-2xl bg-gray-700 text-xs text-gray-400 justify-center items-center m-px">-->

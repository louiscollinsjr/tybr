<template>
<!--  <div class="text-sm grid-cols-3 sm:grid-cols-3 grid md:grid-cols-12 lg:grid-cols-12 gap-5" :class="squareWidth">-->
  <div class="text-sm" style="clear: left">
    <div v-for="book in books" :key="book.id" class="h-6 w-6 flex text-xs text-gray-400 justify-center items-center m-px" style="float:left" :class="squareColor">
      {{ book.book_abbreviation}} {{book.name}}
<!--      <div v-for="n in book.chaptersAggregate.count" :key="book.book_abbreviation" class="h-11 w-11 rounded-none flex text-xs text-gray-400 justify-center items-center m-px " style="float:left;" :class="squareColor">-->
<!--        {{ n }}-->
<!--      </div>-->
    </div>
  </div>
</template>

<script>

export default {
  props:{
    books: {
      type: Array,
      required:true
    },
    squareColor:{
      type: String,
      required: false,
    },
    squareWidth:{
      type: String,
      required: false,
    }
  }
}
</script>


<!--<div class="text-sm">-->
<!--<div v-for="book in books" :key="book.id" class="grid grid-cols-5 gap-4">-->
<!--  <div class="mr-1.5 font-medium text-gray-400"> {{ book.book_abbreviation}}</div>-->
<!--  &lt;!&ndash;         <span v-for="n in book.chaptersAggregate.count" class="text-gray-400 font-light" style="float:left;">{{ n }}</span>&ndash;&gt;-->
<!--</div>-->


<!--{-->
<!--"id": "0x4",-->
<!--"book_name": "Genesis",-->
<!--"book_number": 1,-->
<!--"book_abbreviation": "Ge",-->
<!--"chaptersAggregate": {-->
<!--"count": 50-->
<!--}-->
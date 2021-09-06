<template>
  <div class="max-w-sm mx-auto mb-10 sm:px-6 lg:px-8">
    <div class="rounded-lg overflow-hidden shadow-md text-black">
      <!-- card header -->
      <div
        class="
          text-lg text-center
          px-6
          py-4
          bg-gray-300
          border-b border-gray-600
          font-bold
          uppercase
        "
      >
        {{ title }}
      </div>

      <!-- card body -->
      <div class="h-60 overflow-auto p-6 bg-gray-300 border-b border-gray-600">
        <!-- content goes here -->
        {{ description }}
      </div>

      <!-- card footer -->
      <div
        class="
          grid
          md:grid-cols-2
          sm:grid-cols-1
          gap-2
          p-6
          bg-gray-300
          border-gray-200
        "
      >
        <!-- button link -->
        <a
          class="
            bg-blue-500
            shadow-md
            text-center text-sm text-white
            font-bold
            py-3
            hover:bg-blue-400
            rounded
            uppercase
          "
          v-bind:href="doc_link"
          >READ</a
        >
        <!--         <a
          class="bg-blue-500 shadow-md text-center text-sm text-white font-bold py-3 hover:bg-blue-400 rounded uppercase"
          v-bind:href="manual_link"
          >User Manual</a
        >  -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    description: String,
    doc_link: String,
    manual_link: String,
  },
};
</script>

<template>
  <div class="relative">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      class="block absolute text-gray-600 right-0 z-10 h-4 fill-current mr-3"
      style="top: 9px;"
    >
      <path
        d="M508.5 468.9L387.1 347.5c-2.3-2.3-5.3-3.5-8.5-3.5h-13.2c31.5-36.5 50.6-84 50.6-136C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c52 0 99.5-19.1 136-50.6v13.2c0 3.2 1.3 6.2 3.5 8.5l121.4 121.4c4.7 4.7 12.3 4.7 17 0l22.6-22.6c4.7-4.7 4.7-12.3 0-17zM208 368c-88.4 0-160-71.6-160-160S119.6 48 208 48s160 71.6 160 160-71.6 160-160 160z"
      ></path>
    </svg>
    <input
      v-model="searchInput"
      @input="onInputChange"
      @blur="onInputBlur"
      placeholder="Search..."
      class="w-full bg-white text-gray-700 rounded border-2 border-transparent outline-none focus:border-purple-500 px-4 py-1"
    />
    <div class="relative">
      <div
        class="absolute z-30 bg-white top-0 inset-x-0 rounded shadow-lg mt-1"
      >
        <nuxt-link
          v-for="suggestion in suggestions"
          :key="suggestion.id"
          :to="`/${suggestion.slug}`"
          class="block truncate text-gray-700 hover:text-main hover:bg-gray-100 px-4 py-2"
        >
          {{ suggestion.content.title }}
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import debounce from 'lodash/debounce'

export default {
  props: {
    search: {
      type: Function,
      required: true,
    },
  },
  data: () => ({
    searchInput: '',
    suggestions: [],
  }),
  methods: {
    onInputChange: debounce(async function () {
      this.suggestions = await this.search(this.searchInput)
    }, 300),
    onInputBlur() {
      setTimeout(() => (this.suggestions = []), 300)
    },
  },
}
</script>

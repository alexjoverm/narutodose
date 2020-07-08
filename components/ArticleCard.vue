<template>
  <div>
    <header>
      <nuxt-link :to="`/${slug}`">{{ title }}</nuxt-link>
    </header>
    <p>{{ description }}</p>
    <footer>
      <img :src="author.image" :alt="author.name" />
      <span>{{ author.name }}</span>
    </footer>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    slug: String,
    description: String,
    author: Object,
  },
}
</script>

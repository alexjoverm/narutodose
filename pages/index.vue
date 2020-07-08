<template>
  <div>
    <h1>Articles</h1>
    <div>
      <ArticleCard
        v-for="article in articles"
        :key="article.title"
        :title="article.title"
        :description="article.description"
        :author="article.author"
      />
    </div>
  </div>
</template>

<script>
export default {
  asyncData() {
    const articles = [
      {
        title: 'How to make your articles Vuetiful',
        description:
          'This article guides you through all the steps to make an article shine with your favourite framework, Vue',
        author: {
          name: 'Naruto Uzumaki',
          image: 'https://wallpaperaccess.com/full/2866246.jpg',
        },
      },
    ]

    return { articles }
  },
}
</script>

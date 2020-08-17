import StoryblokClient from 'storyblok-js-client'
import kebabCase from 'lodash/kebabCase'

export const fetchSitemapRoutes = async () => {
  const routes = []
  const client = new StoryblokClient({ accessToken: process.env.STORYBLOK_KEY })

  const { data: articlesData } = await client.get('cdn/links', {
    starts_with: 'articles/',
  })
  const { data: tagsData } = await client.get('cdn/tags')

  Object.values(articlesData.links).forEach((article) =>
    routes.push(`/${article.slug}`)
  )
  tagsData.tags.forEach((tag) => routes.push(`/topics/${kebabCase(tag.name)}`))

  return routes
}

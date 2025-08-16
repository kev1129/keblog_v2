import { defineContentConfig, defineCollection, z} from '@nuxt/content'

export default defineContentConfig({
  collections: {
    blog: defineCollection({
      type: 'page',
      source: 'blog/*.md',
      schema: z.object({
        tags: z.array(z.string()),
        date: z.date(),
        draft: z.boolean(),
        description: z.string()
      })
    })
  },
})
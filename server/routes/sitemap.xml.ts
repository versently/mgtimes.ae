import { serverQueryContent } from '#content/server'
import { SitemapStream, streamToPromise } from 'sitemap'

export default defineEventHandler(async (event) => {
  // Fetch all documents
  const docs = await serverQueryContent(event).find()
  const sitemap = new SitemapStream({
    hostname: 'https://mgtimes.ae'
  })

  sitemap.write({
    url:'/',
  })
  sitemap.write({
    url:'/models',
  })
  sitemap.write({
    url:'/services',
  })
  sitemap.write({
    url:'/media',
  })

  sitemap.write({
    url:'/casting',
  })
  sitemap.write({
    url:'/contacts',
  })

  
  sitemap.write({
    url:'/ru',
  })
  sitemap.write({
    url:'/ru/services',
  })
  sitemap.write({
    url:'/ru/models',
  })
  sitemap.write({
    url:'/ru/media',
  })
  sitemap.write({
    url:'/ru/casting',
  })
  sitemap.write({
    url:'/ru/contacts',
  })
  for (const doc of docs) {
    sitemap.write({
      url: doc._path,
    })
  }
 
  sitemap.end()

  return streamToPromise(sitemap)
})

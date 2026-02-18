import { serverQueryContent } from '#content/server'
import { SitemapStream, streamToPromise } from 'sitemap'

export default defineEventHandler(async (event) => {
  // Fetch all documents
  const docs = await serverQueryContent(event).find()
  const sitemap = new SitemapStream({
    hostname: 'https://mgtimes.ae'
  })

  // Функция для проверки валидности URL
  const isValidUrl = (url: string) => {
    return url && 
           url !== 'undefined' && 
           url !== '/undefined' && 
           !url.includes('undefined') &&
           url !== '#'
  }

  // Статические URL (проверяем их тоже)
  const staticUrls = [
    '/',
    '/girls',
    '/services',
    '/media',
    '/casting',
    '/contacts',
    '/ru',
    '/ru/services',
    '/ru/girls',
    '/ru/media',
    '/ru/casting',
    '/ru/contacts'
  ]

  // Добавляем только валидные статические URL
  for (const url of staticUrls) {
    if (isValidUrl(url)) {
      sitemap.write({ url })
    }
  }

  // Добавляем только валидные документы
  for (const doc of docs) {
    if (isValidUrl(doc._path)) {
      sitemap.write({
        url: doc._path,
      })
    }
  }
 
  sitemap.end()

  return streamToPromise(sitemap)
})
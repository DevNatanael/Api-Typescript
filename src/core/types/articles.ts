import {Profile} from '@/core/types/profile'
import {Tag} from '@/core/types/tag'

export type Article ={
  slug: string
  title: string
  description: string
  body: string
  tagList: Tag[] //Tag[]
  createdAt: string
  updateAl: string
  favorited: boolean
  favoritesCount: number
  author: Profile
}

export type Articles = {
  articles: Article[]
  articlesCount: number
}

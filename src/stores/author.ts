import { defineStore } from 'pinia'
import { usePostStore, type PostState } from './post'
import { AxiosKey } from '@/utilities/symbols'
import { injectStrict } from '@/utilities/injectTyped'
import { useHttpClient } from '@/services/axios/useHttpClient'
import type { Author } from '@/types/author.interface'

export interface AuthorState {
  authors: Author[]
  loading: boolean
  error: any | null
}

export const useAuthorStore = defineStore({
  id: 'author',
  state: (): AuthorState => ({
    authors: [],
    loading: false,
    error: null
  }),
  getters: {
    getPostAuthor: (state: AuthorState) => {
      const postStore: PostState = usePostStore()
      return state.authors.find((author: Author) => author.id === postStore?.post?.userId)
    }
  },
  actions: {
    async fetchAuthors() {
      //   this.authors = await fetch('https://jsonplaceholder.typicode.com/users').then((response) =>
      //     response.json()
      //   )
      const { get, isLoading, response, error } = useHttpClient<Author[]>(injectStrict(AxiosKey))
      await get('/users', {})
      this.authors = response?.value?.data || []
      this.loading = isLoading.value
      this.error = error.value
    }
  }
})

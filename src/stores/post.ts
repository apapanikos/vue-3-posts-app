import type { Post } from '@/types/post.interface'
import { defineStore } from 'pinia'
import { AxiosKey } from '@/utilities/symbols'
import { injectStrict } from '@/utilities/injectTyped'
import { useHttpClient } from '@/services/axios/useHttpClient'

export interface PostState {
  posts: Post[]
  post: Post | null
  loading: boolean
  error: any | null
}

export const usePostStore = defineStore({
  id: 'post',
  state: (): PostState => ({
    posts: [],
    post: null,
    loading: false,
    error: null
  }),
  getters: {
    getPostsPerAuthor: (state: PostState) => {
      return (authorId: number) =>
        (state.posts || []).filter((post: Post) => post?.userId === authorId)
    }
  },
  actions: {
    async fetchPosts() {
      // this.posts = []
      // this.loading = true
      // try {
      //   this.posts = await fetch('https://jsonplaceholder.typicode.com/posts').then((response) =>
      //     response.json()
      //   )
      // } catch (error) {
      //   this.error = error
      // } finally {
      //   this.loading = false
      // }
      const { get, isLoading, response, error } = useHttpClient<Post[]>(injectStrict(AxiosKey))
      await get('/posts', {})
      this.posts = response?.value?.data || []
      this.loading = isLoading.value
      this.error = error.value
    },
    async fetchPost(id: number) {
      // this.post = null
      // this.loading = true
      // try {
      //   this.post = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then(
      //     (response) => response.json()
      //   )
      // } catch (error) {
      //   this.error = error
      // } finally {
      //   this.loading = false
      // }
      const { get, isLoading, response, error } = useHttpClient<Post>(injectStrict(AxiosKey))
      await get(`/posts/${id}`, {})
      this.post = response?.value?.data || null
      this.loading = isLoading.value
      this.error = error.value
    }
  }
})

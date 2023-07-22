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
    async fetchPosts({ page = 1, limit = 10 } = {}) {
      const { get, isLoading, response, error } = useHttpClient<Post[]>()
      await get(`/posts?_limit=${limit}_page=${page}`, {})
      this.posts = response?.value?.data || []
      this.loading = isLoading.value
      this.error = error.value
    },
    async fetchPost(id: number) {
      const { get, isLoading, response, error } = useHttpClient<Post>()
      await get(`/posts/${id}`, {})
      this.post = response?.value?.data || null
      this.loading = isLoading.value
      this.error = error.value
    }
  }
})

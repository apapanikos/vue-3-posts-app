import { defineStore } from 'pinia'
import { usePostStore, type PostState } from './post'
import { AxiosKey } from '@/utilities/symbols'
import { injectStrict } from '@/utilities/injectTyped'
import { useHttpClient } from '@/services/axios/useHttpClient'
import type { Comment } from '@/types/comment.interface'

interface CommentState {
  comments: Comment[]
  loading: boolean
  error: any | null
}
export const useCommentStore = defineStore({
  id: 'comment',
  state: (): CommentState => ({
    comments: [],
    loading: false,
    error: null
  }),
  getters: {
    getPostComments: (state: CommentState) => {
      const postSore: PostState = usePostStore()
      return state.comments.filter((comment: Comment) => comment.postId === postSore?.post?.id)
    }
  },
  actions: {
    async fetchComments() {
      //   this.comments = await fetch('https://jsonplaceholder.typicode.com/comments').then(
      //     (response) => response.json()
      //   )
      const { get, isLoading, response, error } = useHttpClient<Comment[]>(injectStrict(AxiosKey))
      await get('/comments', {})
      this.comments = response?.value?.data || []
      this.loading = isLoading.value
      this.error = error.value
    }
  }
})

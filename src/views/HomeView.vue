<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { usePostStore } from '../stores/post'
import PostCard from '@/components/PostCard.vue'
import Pagination from '@/components/Pagination.vue'

const page = ref(1)

const { posts, loading, error } = storeToRefs(usePostStore())
const { fetchPosts } = usePostStore()

fetchPosts({ page: page.value })

function setPage(page: number) {
  fetchPosts({ page })
}
</script>

<template>
  <main class="mb-auto">
    <div class="divide-y divide-gray-200 dark:divide-gray-700">
      <div class="space-y-2 pt-6 pb-8 md:space-y-5">
        <h1
          class="tagline text-3xl font-extrabold leading-9 tracking-tight sm:text-4xl sm:leading-10 md:text-6xl md:leading-14"
        >
          Latest <span>Trending</span> <br />
          Random Funny Posts
        </h1>
        <p class="text-lg leading-7 text-gray-500 dark:text-gray-400">
          A blog created with Vue 3 - CompositionAPI, Pinia & Tailwind.css
        </p>
      </div>
      <ul v-if="posts" class="divide-y divide-gray-200 dark:divide-gray-700">
        <PostCard class="py-12" v-for="post in posts" :key="post.id" :post="post" />
      </ul>
      <Pagination :currPage="page" @set-page="setPage" />
    </div>
  </main>
</template>

<style scoped>
.tagline {
  background: -webkit-linear-gradient(315deg, #42d392 25%, #647eff);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
@/services/post/usePosts @/services/posts/usePosts

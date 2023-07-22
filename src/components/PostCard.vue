<script setup lang="ts">
defineProps(['post'])
</script>

<template>
  <li>
    <article>
      <div class="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
        <dl>
          <dd class="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
            <time datetime="2021-08-07T15:32:14.000Z">August 7, 2022</time>
          </dd>
        </dl>
        <div class="space-y-5 xl:col-span-3">
          <div class="space-y-6">
            <div>
              <h2 class="text-2xl font-bold leading-8 tracking-tight">
                <RouterLink
                  :to="`/post/${post.id}`"
                  class="text-gray-900 dark:text-gray-100 capitalize"
                  >{{ post.title }}</RouterLink
                >
              </h2>
              <div class="flex flex-wrap">
                <li
                  class="mr-3 text-sm font-medium uppercase text-emerald-500 hover:text-emerald-600 dark:hover:text-emerald-400"
                  v-for="n in 3"
                  :key="n"
                >
                  VUE3
                </li>
              </div>
            </div>
            <div class="prose max-w-none text-gray-500 dark:text-gray-400">
              {{ post.body }}
            </div>
          </div>
          <div class="text-base font-medium leading-6">
            <RouterLink
              :to="`/post/${post.id}`"
              class="text-emerald-500 hover:text-emerald-600 dark:hover:text-emerald-400"
              >Read more →</RouterLink
            >
          </div>
        </div>
      </div>
    </article>
  </li>
</template>

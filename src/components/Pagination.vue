<script setup lang="ts">
defineProps(['hasNextPage', 'hasPreviousPage', 'currPage'])
defineEmits(['set-page'])
</script>

<template>
  <div class="w-full py-4 space-x-4 flex items-center justify-center">
    <div
      class="rounded h-8 w-8 bg-[#383838] hover:bg-emerald-600 ease-in duration-200 cursor-pointer flex items-center justify-center bg-purple p-2 font-semibold text-sm text-gray-200"
      @click="$emit('set-page', currPage - 1)"
    >
      <svg class="fill-white" aria-hidden="true" focusable="false" viewBox="0 0 24 24">
        <path
          d="M15,19c-0.3,0-0.5-0.1-0.7-0.3l-6-6c-0.4-0.4-0.4-1,0-1.4l6-6c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4L10.4,12l5.3,5.3c0.4,0.4,0.4,1,0,1.4C15.5,18.9,15.3,19,15,19z"
        ></path>
      </svg>
    </div>
    <span class="font-semibold text-sm text-gray-100">{{ currPage || 1 }}</span>
    <div
      class="rounded h-8 w-8 bg-[#383838] hover:bg-emerald-600 ease-in duration-200 cursor-pointer flex items-center justify-center bg-purple p-2 font-semibold text-sm text-gray-200"
      @click="$emit('set-page', currPage + 1)"
    >
      <svg class="fill-white" aria-hidden="true" focusable="false" viewBox="0 0 24 24">
        <path
          d="M9,19c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l5.3-5.3L8.3,6.7c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l6,6c0.4,0.4,0.4,1,0,1.4l-6,6C9.5,18.9,9.3,19,9,19z"
        ></path>
      </svg>
    </div>
  </div>
</template>

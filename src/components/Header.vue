<script setup lang="ts"></script>

<template>
  <header class="flex items-center justify-between py-10">
    <div>
      <RouterLink :to="`/`">
        <div class="flex items-center justify-between">VueLog 3</div>
      </RouterLink>
    </div>
    <div class="flex items-center text-base leading-5">
      <div class="hidden sm:block">
        <div class="p-1 font-medium text-gray-900 dark:text-gray-100 sm:p-4">
          <RouterLink :to="`/authors`">Authors</RouterLink>
        </div>
      </div>
    </div>
  </header>
</template>

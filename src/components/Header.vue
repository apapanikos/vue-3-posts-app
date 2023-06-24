<script setup lang="ts"></script>

<template>
  <header class="flex items-center justify-between py-10">
    <div>
      <RouterLink :to="`/`">
        <div class="flex items-center justify-between">
          <div class="mr-3 w-[25px]">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 261.76 226.69">
              <path
                d="M161.096.001l-30.225 52.351L100.647.001H-.005l130.877 226.688L261.749.001z"
                fill="#41b883"
              />
              <path
                d="M161.096.001l-30.225 52.351L100.647.001H52.346l78.526 136.01L209.398.001z"
                fill="#34495e"
              />
            </svg>
          </div>
          <div class="hidden h-6 text-2xl font-semibold sm:block">VueVlog3</div>
        </div>
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

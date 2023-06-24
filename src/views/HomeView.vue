<template>
  <main>
    <button @click="getTodos">Get Todos</button>
    <ul v-if="todos?.length">
      <li v-for="todo in todos" :key="todo.id">{{ todo.title }}</li>
    </ul>
  </main>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { injectStrict } from '@/utilities/injectTyped'
import { AxiosKey } from '@/utilities/symbols.ts'
import { useHttpClient } from '@/services/axios/useHttpClient'

interface Todo {
  userId: number
  id: number
  title: string
  completed: boolean
}

const todos = ref<Todo[]>([])

const httpClient = injectStrict(AxiosKey)
const { get, response } = useHttpClient<Todo[], undefined>(httpClient)

async function getTodos() {
  await get('/todos', {
    params: {
      _limit: 10
    }
  })
  todos.value = response?.value?.data as Todo[]
}
</script>

import Axios, {
  AxiosError,
  type AxiosInstance,
  type AxiosRequestConfig,
  type AxiosResponse
} from 'axios'
import { type Ref } from 'vue'

import type { AxiosComposables } from './types'
import { ref, shallowRef } from 'vue'

export function useHttpClient<T, E = unknown, H = unknown>(
  instance: AxiosInstance
): AxiosComposables<T, E> {
  const isLoading = ref(false)
  const hasFailed = ref(false)
  const isFinished = ref(false)
  const status = ref<number>()
  const statusText = ref<string>()
  const response = shallowRef<AxiosResponse<T>>()
  const data = shallowRef<T>()
  const error = shallowRef<AxiosError<E>>()
  const headers = ref<H>()

  function reset() {
    response.value = undefined
    data.value = undefined
    error.value = undefined
    status.value = 0
    statusText.value = undefined
    isLoading.value = true
    hasFailed.value = false
    isFinished.value = false
  }

  function map(res: AxiosResponse) {
    status.value = res.status as number
    statusText.value = res.statusText as string
    data.value = res.data
    headers.value = res.headers as any
  }

  async function request(config: AxiosRequestConfig): Promise<void> {
    reset()

    try {
      response.value = await instance.request<T>({
        ...config
      })
      map(response.value)
    } catch (_error) {
      error.value = _error as AxiosError<E>
      hasFailed.value = true
    } finally {
      isLoading.value = false
      isFinished.value = true
    }
  }

  function get(url: string, config: AxiosRequestConfig): Promise<void> {
    return request({ ...config, method: 'GET', url })
  }

  function post(url: string, data: T, config: AxiosRequestConfig): Promise<void> {
    return request({ ...config, method: 'POST', url, data })
  }

  function put(url: string, data: T, config: AxiosRequestConfig): Promise<void> {
    return request({ ...config, method: 'PUT', url, data })
  }

  function patch(url: string, data: T, config: AxiosRequestConfig): Promise<void> {
    return request({ ...config, method: 'PATCH', url, data })
  }

  function remove(url: string, config: AxiosRequestConfig): Promise<void> {
    return request({ ...config, method: 'DELETE', url })
  }

  return {
    data,
    response,
    error,
    headers,
    status: status as Ref<number>,
    statusText: statusText as Ref<string>,
    isLoading,
    hasFailed,
    isFinished,
    request,
    get,
    post,
    patch,
    put,
    remove
  }
}

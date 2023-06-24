import { type Ref } from 'vue'
import { AxiosError, type AxiosRequestConfig, type AxiosResponse } from 'axios'

export interface AxiosResponseComposables<T, E = unknown, H = unknown> {
  response: Ref<AxiosResponse<T> | undefined>
  data: Ref<T | undefined>
  error: Ref<AxiosError<E> | undefined>
  headers: Ref<H>
  status: Ref<number>
  hasFailed: Ref<boolean>
  statusText: Ref<string>
  isFinished: Ref<boolean>
}

export interface AxiosComposables<T, E = unknown> extends AxiosResponseComposables<T, E> {
  isLoading: Ref<boolean>
  request: (config: AxiosRequestConfig) => Promise<void>
  get: (url: string, config: AxiosRequestConfig) => Promise<void>
  post: (url: string, data: T, config: AxiosRequestConfig) => Promise<void>
  put: (url: string, data: T, config: AxiosRequestConfig) => Promise<void>
  patch: (url: string, data: T, config: AxiosRequestConfig) => Promise<void>
  remove: (url: string, config: AxiosRequestConfig) => Promise<void>
}

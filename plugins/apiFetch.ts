import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin(nuxtApp => {
    const config = useRuntimeConfig()
    // const router = useNuxtApp().$router

    nuxtApp.provide(
        'apiFetch',
        $fetch.create({
            // baseURL: config.API_BASE_URL,
            baseURL: 'http://localhost:8000/api',
            credentials: 'include',
            headers: {
                Accept: 'application/json',
                // Authorization: 'Bearer ' + Cookies.get('token'),
            },
        })
    )
})
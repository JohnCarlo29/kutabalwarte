<template>
  <header class="fixed z-50 w-screen p-3 px-4 md:p-6 md:px-16 bg-primary">
    <div class="hidden md:flex w-full h-full items-center justify-between">
      <a class="flex items-center gap-2" href="/">
        <img
          src="~/assets/images/square-logo.jpg"
          class="w-20 object-cover"
          alt="logo"
        />
        <p class="text-headingColor text-xl font-bold">KutaBalwarte</p>
      </a>
      <div class="flex items-center gap-8">
        <ul
          class="flex items-center gap-24"
          style="opacity: 1; transform: none"
        >
          <li
            class="
              text-lg text-textColor
              hover:text-headingColor
              duration-100
              transition-all
              ease-in-out
              cursor-pointer
            "
          >
            Home
          </li>
          <li
            class="
              text-lg text-textColor
              hover:text-headingColor
              duration-100
              transition-all
              ease-in-out
              cursor-pointer
            "
          >
            Menu
          </li>
          <li
            class="
              text-lg text-textColor
              hover:text-headingColor
              duration-100
              transition-all
              ease-in-out
              cursor-pointer
            "
          >
            About Us
          </li>
          <li
            class="
              text-lg text-textColor
              hover:text-headingColor
              duration-100
              transition-all
              ease-in-out
              cursor-pointer
            "
          >
            Service
          </li>
        </ul>
        <div class="relative flex items-center justify-center" @click="cartStore.toggleCart">
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 24 24"
            class="text-textColor text-2xl cursor-pointer"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path
              d="M17.21 9l-4.38-6.56a.993.993 0 00-.83-.42c-.32 0-.64.14-.83.43L6.79 9H2c-.55 0-1 .45-1 1 0 .09.01.18.04.27l2.54 9.27c.23.84 1 1.46 1.92 1.46h13c.92 0 1.69-.62 1.93-1.46l2.54-9.27L23 10c0-.55-.45-1-1-1h-4.79zM9 9l3-4.4L15 9H9zm3 8c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"
            ></path>
          </svg>
          <div
            class="
              absolute
              -top-2
              -right-2
              w-5
              h-5
              rounded-full
              bg-cartNumBg
              flex
              items-center
              justify-center
            "
          >
            <p class="text-xs text-white font-semibold">{{ cartStore.cartMenus.length }}</p>
          </div>
        </div>
        <div class="relative">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
            <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </div>
      </div>
    </div>
    <div class="flex items-center justify-between md:hidden w-full h-full">
      <div class="relative flex items-center justify-center">
        <svg
          stroke="currentColor"
          fill="currentColor"
          stroke-width="0"
          viewBox="0 0 24 24"
          class="text-textColor text-2xl cursor-pointer"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path fill="none" d="M0 0h24v24H0z"></path>
          <path
            d="M17.21 9l-4.38-6.56a.993.993 0 00-.83-.42c-.32 0-.64.14-.83.43L6.79 9H2c-.55 0-1 .45-1 1 0 .09.01.18.04.27l2.54 9.27c.23.84 1 1.46 1.92 1.46h13c.92 0 1.69-.62 1.93-1.46l2.54-9.27L23 10c0-.55-.45-1-1-1h-4.79zM9 9l3-4.4L15 9H9zm3 8c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"
          ></path>
        </svg>
        <div
          class="
            absolute
            -top-2
            -right-2
            w-5
            h-5
            rounded-full
            bg-cartNumBg
            flex
            items-center
            justify-center
          "
        >
          <p class="text-xs text-white font-semibold">3</p>
        </div>
      </div>
      <a class="flex items-center gap-2" href="/">
        <img
          src="/static/media/logo.0f99324454e3c3ccba98.png"
          class="w-8 object-cover"
          alt="logo"
        />
        <p class="text-headingColor text-xl font-bold">City</p>
      </a>
      <div class="relative">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
          <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      </div>
    </div>
  </header>
</template>

<script setup>
import { useCartStore } from "../stores/cart";

const cartStore = useCartStore()
</script>

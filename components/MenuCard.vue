<template>
  <div
    class="
      w-275
      h-[175px]
      min-w-[275px]
      md:w-300 md:min-w-[300px]
      bg-cardOverlay
      rounded-lg
      py-2
      px-4
      my-12
      backdrop-blur-lg
      hover:drop-shadow-lg
      flex flex-col
      items-center
      justify-evenly
      relative
    "
  >
    <div class="w-full flex items-center justify-between">
      <div class="w-40 h-40 -mt-8 drop-shadow-2xl hover:scale-125">
        <img
          :src="menu.photo"
          alt=""
          class="w-full h-full object-contain"
        />
      </div>
      <div
        class="
          w-8
          h-8
          rounded-full
          bg-red-600
          flex
          items-center
          justify-center
          cursor-pointer
          hover:shadow-md
          -mt-8
        "
        style="transform: none"
        @click="cartStore.addItem(menu)"
      >
        <svg
          stroke="currentColor"
          fill="currentColor"
          stroke-width="0"
          viewBox="0 0 24 24"
          class="text-white"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path fill="none" d="M0 0h24v24H0z"></path>
          <path
            d="M17.21 9l-4.38-6.56a.993.993 0 00-.83-.42c-.32 0-.64.14-.83.43L6.79 9H2c-.55 0-1 .45-1 1 0 .09.01.18.04.27l2.54 9.27c.23.84 1 1.46 1.92 1.46h13c.92 0 1.69-.62 1.93-1.46l2.54-9.27L23 10c0-.55-.45-1-1-1h-4.79zM9 9l3-4.4L15 9H9zm3 8c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"
          ></path>
        </svg>
      </div>
    </div>
    <div class="w-full flex flex-col items-end justify-end -mt-8">
      <p class="text-textColor font-semibold text-base md:text-lg">
        {{ menu.name }}
      </p>
      <p class="mt-1 text-sm text-gray-500">{{ menu.description }}</p>
      <div class="flex items-center gap-8">
        <p class="text-lg text-headingColor font-semibold">
          <span class="text-sm text-red-500">&#8369	</span> {{ menu.price }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useCartStore } from '../stores/cart'

const props = defineProps({
  menu: Object
})

const cartStore = useCartStore()

</script>

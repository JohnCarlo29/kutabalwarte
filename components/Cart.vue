<template>
  <div
    v-if="cartStore.showCart"
    class="
      fixed
      top-0
      right-0
      w-full
      md:w-375
      h-screen
      bg-white
      drop-shadow-md
      flex flex-col
      z-[101]
    "
    style="opacity: 1; transform: none"
  >
    <div class="w-full flex items-center justify-between p-4 cursor-pointer">
      <div @click="cartStore.toggleCart">
        <svg
          stroke="currentColor"
          fill="currentColor"
          stroke-width="0"
          viewBox="0 0 24 24"
          class="text-textColor text-3xl"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path fill="none" d="M0 0h24v24H0V0z"></path>
          <path
            d="M21 11H6.83l3.58-3.59L9 6l-6 6 6 6 1.41-1.41L6.83 13H21v-2z"
          ></path>
        </svg>
      </div>
      <p class="text-textColor text-lg font-semibold">Cart</p>
      <p
        @click="cartStore.resetCart"
        class="
          flex
          items-center
          gap-2
          p-1
          px-2
          my-2
          bg-gray-100
          rounded-md
          hover:shadow-md
          cursor-pointer
          text-textColor text-base
        "
      >
        Clear
        <svg
          stroke="currentColor"
          fill="currentColor"
          stroke-width="0"
          viewBox="0 0 24 24"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path
              d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm4.82-4.924A7 7 0 0 0 9.032 5.658l.975 1.755A5 5 0 0 1 17 12h-3l2.82 5.076zm-1.852 1.266l-.975-1.755A5 5 0 0 1 7 12h3L7.18 6.924a7 7 0 0 0 7.788 11.418z"
            ></path>
          </g>
        </svg>
      </p>
    </div>
    <div class="w-full h-full bg-cartBg rounded-t-[2rem] flex flex-col">
      <div
        class="
          w-full
          h-340
          md:h-42
          px-6
          py-10
          flex flex-col
          gap-3
          overflow-y-scroll
          scrollbar-none
        "
      >
        <div
          v-for="(cartMenu, index) in cartStore.cartMenus"
          :key="`item-${index}`"
          class="w-full p-1 px-2 rounded-lg bg-cartItem flex items-center gap-2"
        >
          <img
            :src="cartMenu.product.photo"
            class="w-20 h-20 max-w-[60px] rounded-full object-contain"
            alt=""
          />
          <div class="flex flex-col gap-2">
            <p class="text-base text-gray-50">{{ cartMenu.product.name }}</p>
            <p class="text-sm block text-gray-300 font-semibold">$ {{ cartMenu.product.price }}</p>
          </div>
          <div class="group flex items-center gap-2 ml-auto cursor-pointer">
            <div @click="cartStore.removeItem(cartMenu.product)">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 24 24"
                class="text-gray-50"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M5 11h14v2H5z"></path>
              </svg>
            </div>
            <p
              class="
                w-5
                h-5
                rounded-sm
                bg-cartBg
                text-gray-50
                flex
                items-center
                justify-center
              "
            >
            {{ cartMenu.quantity }}
            </p>
            <div @click="cartStore.addItem(cartMenu.product)">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 24 24"
                class="text-gray-50"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div
        class="
          w-full
          flex-1
          bg-cartTotal
          rounded-t-[2rem]
          flex flex-col
          items-center
          justify-evenly
          px-8
          py-2
        "
      >
        <div class="w-full flex items-center justify-between">
          <p class="text-gray-400 text-lg">Sub Total</p>
          <p class="text-gray-400 text-lg">&#8369; {{ cartStore.subtotal  }}</p>
        </div>
        <div class="w-full flex items-center justify-between">
          <p class="text-gray-400 text-lg">Delivery</p>
          <p class="text-gray-400 text-lg">&#8369; 50</p>
        </div>
        <div class="w-full border-b border-gray-600 my-2"></div>
        <div class="w-full flex items-center justify-between">
          <p class="text-gray-200 text-xl font-semibold">Total</p>
          <p class="text-gray-200 text-xl font-semibold">&#8369; {{ cartStore.subtotal  }}</p>
        </div>
        <button
          type="button"
          class="
            w-full
            p-2
            rounded-full
            bg-gradient-to-tr
            from-orange-400
            to-orange-600
            text-gray-50 text-lg
            my-2
            hover:shadow-lg
          "
        >
          Login to check out
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useCartStore } from "~~/stores/cart";

const cartStore = useCartStore()
</script>


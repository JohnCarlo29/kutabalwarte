<template>
  <main class="mt-14 md:mt-20 px-4 md:px-16 py-4 w-full">
    <div class="w-full h-auto flex flex-col items-center justify-center">
      <!-- <section class="w-full my-6">
        <div class="w-full flex items-center justify-between">
          <p
            class="
              text-2xl
              font-semibold
              capitalize
              text-headingColor
              relative
              before:absolute
              before:rounded-lg
              before:content
              before:w-32
              before:h-1
              before:-bottom-2
              before:left-0
              before:bg-gradient-to-tr
              from-orange-400
              to-orange-600
              transition-all
              ease-in-out
              duration-100
            "
          >
            Our fresh &amp; healthy fruits
          </p>
          <div class="hidden md:flex gap-3 items-center">
            <div
              class="
                w-8
                h-8
                rounded-lg
                bg-orange-300
                hover:bg-orange-500
                cursor-pointer
                hover:shadow-lg
                flex
                items-center
                justify-center
              "
              style="transform: none"
              @click="scrollLeft"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 24 24"
                class="text-lg text-white"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path>
              </svg>
            </div>
            <div
              class="
                w-8
                h-8
                rounded-lg
                bg-orange-300
                hover:bg-orange-500
                cursor-pointer
                transition-all
                duration-100
                ease-in-out
                hover:shadow-lg
                flex
                items-center
                justify-center
              "
              style="transform: none"
              @click="scrollRight"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 24 24"
                class="text-lg text-white"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path>
              </svg>
            </div>
          </div>
        </div>
        <div
          class="
            w-full
            flex
            items-center
            gap-3
            my-12
            scroll-smooth
            overflow-x-scroll
            scrollbar-none
            menu-scrollable
          "
        >
          <MenuCard />
        </div>
      </section> -->

      <section class="w-full my-6" id="menu">
        <div class="w-full flex flex-col items-center justify-center">
          <p
            class="
              text-2xl
              font-semibold
              capitalize
              text-headingColor
              relative
              before:absolute
              before:rounded-lg
              before:content
              before:w-16
              before:h-1
              before:-bottom-2
              before:left-0
              before:bg-gradient-to-tr
              from-orange-400
              to-orange-600
              transition-all
              ease-in-out
              duration-100
              mr-auto
            "
          >
            Our Hot Dishes
          </p>
          <div
            class="
              w-full
              flex
              items-center
              justify-start
              lg:justify-center
              gap-8
              py-6
              overflow-x-scroll
              scrollbar-none
            "
          >
            <div
              v-for="category in categories" :key="`category-${category.id}`"
              @click="categoryId = category.id"
              class="
                group
                bg-card
                w-24
                min-w-[94px]
                h-28
                cursor-pointer
                rounded-lg
                drop-shadow-xl
                flex flex-col
                gap-3
                items-center
                justify-center
                hover:bg-cartNumBg
              "
              style="transform: none"
            >
              <div
                class="
                  w-10
                  h-10
                  rounded-full
                  shadow-lg
                  bg-cartNumBg
                  group-hover:bg-white
                  flex
                  items-center
                  justify-center
                "
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 512 512"
                  class="text-white group-hover:text-textColor text-lg"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M368 128h.09m111.46-32h-91.06l8.92-35.66 38.32-13.05c8.15-2.77 13-11.43 10.65-19.71a16 16 0 00-20.54-10.73l-47 16a16 16 0 00-10.36 11.27L355.51 96H224.45c-8.61 0-16 6.62-16.43 15.23A16 16 0 00224 128h2.75l1 8.66A8.3 8.3 0 00236 144c39 0 73.66 10.9 100.12 31.52A121.9 121.9 0 01371 218.07a123.4 123.4 0 0110.12 29.51 7.83 7.83 0 003.29 4.88 72 72 0 0126.38 86.43 7.92 7.92 0 00-.15 5.53A96 96 0 01416 376c0 22.34-7.6 43.63-21.4 59.95a80.12 80.12 0 01-28.78 21.67 8 8 0 00-4.21 4.37 108.19 108.19 0 01-17.37 29.86 2.5 2.5 0 001.9 4.11h49.21a48.22 48.22 0 0047.85-44.14L477.4 128h2.6a16 16 0 0016-16.77c-.42-8.61-7.84-15.23-16.45-15.23z"
                  ></path>
                  <path
                    d="M108.69 320a23.87 23.87 0 0117 7l15.51 15.51a4 4 0 005.66 0L162.34 327a23.87 23.87 0 0117-7h196.58a8 8 0 008.08-7.92V312a40.07 40.07 0 00-32-39.2c-.82-29.69-13-54.54-35.51-72C295.67 184.56 267.85 176 236 176h-72c-68.22 0-114.43 38.77-116 96.8A40.07 40.07 0 0016 312a8 8 0 008 8zm77.25 32a8 8 0 00-5.66 2.34l-22.14 22.15a20 20 0 01-28.28 0l-22.14-22.15a8 8 0 00-5.66-2.34h-69.4a15.93 15.93 0 00-15.76 13.17A65.22 65.22 0 0016 376c0 30.59 21.13 55.51 47.26 56 2.43 15.12 8.31 28.78 17.16 39.47C93.51 487.28 112.54 496 134 496h132c21.46 0 40.49-8.72 53.58-24.55 8.85-10.69 14.73-24.35 17.16-39.47 26.13-.47 47.26-25.39 47.26-56a65.22 65.22 0 00-.9-10.83A15.93 15.93 0 00367.34 352z"
                  ></path>
                </svg>
              </div>
              <p class="text-sm text-textColor group-hover:text-white">
                {{ category.name }}
              </p>
            </div>
          </div>
          <div class="w-full">
            <div
              class="
                w-full
                flex
                items-center
                gap-3
                my-12
                scroll-smooth
                overflow-x-hidden
                flex-wrap
                justify-center
              "
            >
              <MenuCard v-for="menu in menus" :key="`menu-${menu.id}`" :menu="menu" />
            </div>
          </div>
        </div>
      </section>
    </div>
  </main>
</template>

<script setup>
const categoryId = ref(null)
const menus = ref([])

const scrollRight = () => {
  document.querySelector(".menu-scrollable").scrollTo({
    left: 500,
    behavior: "smooth",
  });
};

const scrollLeft = () => {
  document.querySelector(".menu-scrollable").scrollTo({
    right: 500,
    behavior: "smooth",
  });
};

const categories = await useNuxtApp().$apiFetch('/categories', {method: 'get'})

onMounted(() => {
  if (categories.length > 0) {
    categoryId.value = categories[0].id
  }
})

watch(categoryId, async (newSelectedCategoryId) => {
  menus.value = await useNuxtApp().$apiFetch('/menus', {method: 'get', params: { category_id: newSelectedCategoryId }})
})
</script>

<template>
  <div class="tw-mx-auto tw-mt-24">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="tw-h-44 tw-w-44 tw-text-black"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
      />
    </svg>

    <div class="tw-mt-8">
      <h1 class="tw-text-center tw-text-2xl">Your cart is empty</h1>
      <router-link to="/">
        <button
          type="button"
          class="
            tw-px-12
            tw-bg-black
            tw-mt-8
            tw-text-white
            tw-border-black
            tw-py-2
            tw-border-4
            tw-rounded-md
          "
        >
          Add items to Cart
        </button>
      </router-link>
    </div>
  </div>
</template>




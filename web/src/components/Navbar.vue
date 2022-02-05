<template>
  <div class="tw-bg-white">
    <div
      class="
        tw-px-4 tw-py-5 tw-mx-auto
        sm:tw-max-w-xl
        md:tw-max-w-full
        lg:tw-max-w-screen-xl
        md:tw-px-24
        lg:tw-px-8
      "
    >
      <div class="tw-relative tw-flex tw-items-center tw-justify-between">
        <a
          href="/"
          aria-label="Company"
          title="Company"
          class="tw-inline-flex tw-items-center"
        >
          <img src="../assets/logo1.png" alt="" srcset="" />
        </a>
        <ul class="tw-flex tw-items-center tw-hidden tw-space-x-8 lg:tw-flex">
          <router-link to="/">
            <li>
              <a
                href="/"
                aria-label="Our product"
                title="Home"
                class="
                  tw-font-medium
                  tw-tracking-wide
                  tw-mx-4
                  tw-py-4
                  tw-transition-colors
                  tw-duration-200
                  hover:tw-text-teal-accent-400
                "
                >Home</a
              >
            </li>
          </router-link>

          <li>
            <a
              href="/"
              aria-label="Our product"
              title="Our product"
              class="
                tw-font-medium
                tw-tracking-wide
                tw-text-black
                tw-transition-colors
                tw-duration-200
                hover:tw-text-teal-accent-400
              "
              >About</a
            >
          </li>
          <li>
            <a
              href="/"
              aria-label="Product pricing"
              title="Product pricing"
              class="
                tw-font-medium
                tw-tracking-wide
                tw-text-black
                tw-transition-colors
                tw-duration-200
                hover:tw-text-teal-accent-400
              "
              >Shop</a
            >
          </li>
          <router-link to="/history">
          
          <li>
            <a
              href="/"
              aria-label="About us"
              title="About us"
              class="
                tw-font-medium
                tw-tracking-wide
                tw-text-black
                tw-transition-colors
                tw-duration-200
                hover:tw-text-teal-accent-400
              "
              >My Account</a
            >
          </li>
          </router-link>

          <li>
            <a
              href="/"
              aria-label="About us"
              title="About us"
              class="
                tw-font-medium
                tw-tracking-wide
                tw-text-black
                tw-transition-colors
                tw-duration-200
                hover:tw-text-teal-accent-400
              "
              >Blog</a
            >
          </li>
          <li>
            <a
              href="/"
              aria-label="About us"
              title="About us"
              class="
                tw-font-medium
                tw-tracking-wide
                tw-text-black
                tw-transition-colors
                tw-duration-200
                hover:tw-text-teal-accent-400
              "
              >Contact</a
            >
          </li>
        </ul>
        <ul class="tw-flex tw-items-center tw-hidden tw-space-x-8 lg:tw-flex">
            <router-link to="/cart">
          <span class="tw-inline-block tw-relative">
            <span
              class="
                tw-absolute
                tw-top-0
                tw-left-0
             
                tw-block
                tw-h-4
                tw-w-4
               tw-mr-auto
              
              "
            />
            {{count}}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="tw-h-8 tw-w-10 tw-ml-auto"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            
          </span>
            </router-link>
          <router-link to="/add-post">
            <li>
              <a
                href="/"
                class="
                  tw-inline-flex
                  tw-items-center
                  tw-justify-center
                  tw-h-12
                  tw-px-6
                  tw-font-medium
                  tw-tracking-wide
                  tw-text-white
                  tw-bg-black
                  tw-transition
                  tw-duration-200
                  tw-rounded
                  tw-shadow-md
                  bg-deep-purple-accent-400
                  hover:tw-bg-deep-purple-accent-700
                  focus:tw-shadow-outline focus:tw-outline-none
                "
                aria-label="Sign up"
                title="Sign up"
              >
                Add Product
              </a>
            </li>
          </router-link>
        </ul>
        <div class="lg:tw-hidden">
          <button
            aria-label="Open Menu"
            title="Open Menu"
            class="
              tw-p-2 tw--mr-1 tw-transition tw-duration-200 tw-rounded
              focus:tw-outline-none focus:tw-shadow-outline
            "
            @click="isMenuOpen = true"
          >
            <svg class="tw-w-5 tw-text-gray-600" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
              ></path>
              <path
                fill="currentColor"
                d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
              ></path>
              <path
                fill="currentColor"
                d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
              ></path>
            </svg>
          </button>
          <div
            v-if="isMenuOpen"
            class="tw-absolute tw-top-0 tw-left-0 tw-w-full"
          >
            <div class="tw-p-5 tw-bg-white tw-border tw-rounded tw-shadow-sm">
              <div class="tw-flex tw-items-center tw-justify-between tw-mb-4">
                <div>
                  <a
                    href="/"
                    aria-label="Company"
                    title="Company"
                    class="tw-inline-flex tw-items-center"
                  >
                    <svg
                      class="w-8 text-deep-purple-accent-400"
                      viewBox="0 0 24 24"
                      stroke-linejoin="round"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-miterlimit="10"
                      stroke="currentColor"
                      fill="none"
                    >
                      <rect x="3" y="1" width="7" height="12"></rect>
                      <rect x="3" y="17" width="7" height="6"></rect>
                      <rect x="14" y="1" width="7" height="6"></rect>
                      <rect x="14" y="11" width="7" height="12"></rect>
                    </svg>
                    <span
                      class="
                        tw-ml-2
                        tw-text-xl
                        tw-font-bold
                        tw-tracking-wide
                        tw-text-gray-800
                        tw-uppercase
                      "
                      >Company</span
                    >
                  </a>
                </div>
                <div>
                  <button
                    aria-label="Close Menu"
                    title="Close Menu"
                    class="
                      tw-p-2
                      tw--mt-2
                      tw--mr-2
                      tw-transition
                      tw-duration-200
                      tw-rounded
                      hover:tw-bg-gray-200
                      focus:tw-bg-gray-200
                      focus:tw-outline-none
                      focus:tw-shadow-outline
                    "
                    @click="isMenuOpen = false"
                  >
                    <svg class="tw-w-5 tw-text-gray-600" viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
              <nav>
                <ul class="tw-space-y-4">
                  <li>
                    <a
                      href="/"
                      aria-label="Our product"
                      title="Our product"
                      class="
                        tw-font-medium
                        tw-tracking-wide
                        tw-text-gray-700
                        tw-transition-colors
                        tw-duration-200
                        hover:tw-text-deep-purple-accent-400
                      "
                      >Product</a
                    >
                  </li>
                  <li>
                    <a
                      href="/"
                      aria-label="Our product"
                      title="Our product"
                      class="
                        tw-font-medium
                        tw-tracking-wide
                        tw-text-gray-700
                        tw-transition-colors
                        tw-duration-200
                        hover:tw-text-deep-purple-accent-400
                      "
                      >Features</a
                    >
                  </li>
                  <li>
                    <a
                      href="/"
                      aria-label="Product pricing"
                      title="Product pricing"
                      class="
                        tw-font-medium
                        tw-tracking-wide
                        tw-text-gray-700
                        tw-transition-colors
                        tw-duration-200
                        hover:tw-text-deep-purple-accent-400
                      "
                      >Pricing</a
                    >
                  </li>
                  <li>
                    <a
                      href="/"
                      aria-label="About us"
                      title="About us"
                      class="
                        tw-font-medium
                        tw-tracking-wide
                        tw-text-gray-700
                        tw-transition-colors
                        tw-duration-200
                        hover:tw-text-deep-purple-accent-400
                      "
                      >About us</a
                    >
                  </li>
                  <li>
                    <a
                      href="/"
                      class="
                        tw-inline-flex
                        tw-items-center
                        tw-justify-center
                        tw-w-full
                        tw-h-12
                        tw-px-6
                        tw-font-medium
                        tw-tracking-wide
                        tw-text-black
                        tw-transition
                        tw-duration-200
                        tw-rounded
                        tw-shadow-md
                        tw-bg-deep-purple-accent-400
                        hover:tw-bg-deep-purple-accent-700
                        focus:tw-shadow-outline focus:tw-outline-none
                      "
                      aria-label="Sign up"
                      title="Sign up"
                    >
                      Sign up
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Header",
  data() {
    return {
      isMenuOpen: false,
    };
  },

   computed: {
    count() {
      return this.$store.state.cartItemCount;
    }
  }
};
</script>

<style scoped>
li {
  list-style: none;
  text-decoration: none;
}
</style>
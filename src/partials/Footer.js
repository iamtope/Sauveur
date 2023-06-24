import React from "react";

const Footer = () => {
  return (
    <>
      <footer class="bg-gray-300">
        <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div class="md:flex md:justify-between">
            <div class="mb-6 md:mb-0">
              <a href="https://flowbite.com/" class="flex items-center">
                <span class="self-center text-sm font-semibold whitespace-nowrap dark:text-white">
                  Subscribe to our weekly newsletter
                </span>
              </a>
            </div>
            <div class="grid grid-cols-2 gap-8 sm:gap-10 sm:grid-cols-3">
              <div>
                <h2 class="mb-6 text-sm font-semibold  dark:text-customBlue">
                  Reach Us
                </h2>
                <ul class="text-customBlue dark:text-customBlue">
                  <li class="mb-4">
                    <a href="https://flowbite.com/" class="hover:underline">
                      Home{" "}
                    </a>
                  </li>
                  <li>
                    <a href="https://tailwindcss.com/" class="hover:underline">
                      Gallery
                    </a>
                  </li>
                  <li class="mb-4">
                    <a href="https://flowbite.com/" class="hover:underline">
                      About Us{" "}
                    </a>
                  </li>
                  <li>
                    <a href="https://tailwindcss.com/" class="hover:underline">
                      Contact US
                    </a>
                  </li>
                  <li class="mb-4">
                    <a href="https://flowbite.com/" class="hover:underline">
                      Blog{" "}
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 class="mb-6 text-sm font-semibold text-customBlue  dark:customBlue">
                  Be Social
                </h2>
                <ul class="text-customBlue dark:text-customBlue font-medium">
                  <li class="mb-4">
                    <svg
                      class="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                    >
                      <svg
                        class="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                      <span class="sr-only">Twitter page</span>
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 class="mb-6 text-sm font-semibold text-customBlue  dark:text-customBlue">
                  Quick Links
                </h2>
                <ul class="text-customBlue dark:text-customBlue font-medium">
                  <li class="mb-4">
                    <a href="#" class="hover:underline">
                      Link 1
                    </a>
                  </li>
                  <li>
                    <a href="#" class="hover:underline">
                      Link 2{" "}
                    </a>
                  </li>
                  <li>
                    <a href="#" class="hover:underline">
                      Link 3{" "}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div class="sm:flex sm:items-center sm:justify-center">
            <span class="text-sm text-customBlue sm:text-center dark:text-customBlue">
              © 2023{" "}
              <a href="https://flowbite.com/" class="hover:underline">
                Rwanda
              </a>
              , All Rights Reserved.  | Privacy Policy
            </span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

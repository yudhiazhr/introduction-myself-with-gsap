/* eslint-disable react/no-unknown-property */
export const Header = () => {
  return (
    <>
      <header className="fixed bg-transparent w-full  ">
          <div class=" mx-24 flex items-center justify-between relative">
            <div class="px-4">
              <a
                href="#home"
                class="font-bold text-xl text-dark block py-6 lg:text-2xl font-spaceGrotesk "
              >
                Yudhiazhr.
              </a>
            </div>
            <div class="flex items-center px-4">
              <button
                id="hamburger"
                name="hamburger"
                type="button"
                class="block absolute right-4 lg:hidden"
              >
                <span class="hamburger-line transition duration-300 ease-in-out  origin-top-left"></span>
                <span class="hamburger-line transition duration-300 ease-in-out"></span>
                <span class="hamburger-line transition duration-300 ease-in-out  origin-bottom-left"></span>
              </button>
              <nav
                id="nav-menu"
                class="hidden absolute py-5 bg-white shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none"
              >
                <ul class="block lg:flex">
                  <li class="group">
                    <a
                      href=""
                      class="text-base text-dark py-2 mx-8 flex group-hover:text-secondary"
                    >
                      About
                    </a>
                  </li>
                  
                </ul>
              </nav>
            </div>
          </div>
      </header>
    </>
  );
};

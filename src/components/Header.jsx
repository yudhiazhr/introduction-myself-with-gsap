
export const Header = () => {
  return (
    <>
      <header className="fixed bg-transparent w-full z-[10000]  ">
          <div className=" mx-4 lg:mx-24 flex items-center justify-between relative">
            <div className="px-4">
              <a
                href="#Hero"
                className="font-bold text-xl text-dark block py-6 lg:text-2xl font-spaceGrotesk "
              >
                Yudhiazhr.
              </a>
            </div>
            <div className="flex items-center px-4">
              <button
                id="hamburger"
                name="hamburger"
                type="button"
                className="block absolute right-4 lg:hidden"
              >
                <span className="hamburger-line transition duration-300 ease-in-out  origin-top-left"></span>
                <span className="hamburger-line transition duration-300 ease-in-out"></span>
                <span className="hamburger-line transition duration-300 ease-in-out  origin-bottom-left"></span>
              </button>
              <nav
                id="nav-menu"
                className=" py-5"
              >
                <ul className="block lg:flex">
                  <li className="group">
                    <a
                      href="#About"
                      className="text-base md:text-lg font-spaceGrotesk font-bold text-dark py-2  px-4 flex rounded-full border border-dark group-hover:text-white hover:bg-secondary duration-300 transition all"
                    >
                      About me 
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

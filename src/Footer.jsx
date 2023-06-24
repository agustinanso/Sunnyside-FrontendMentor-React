export const Footer = () => {
  return (
    <footer className="bg-[#63c9b5] ">
      <div className="w-full text-center m-auto pt-36 pb-36">
        <div>
          <p className="font-[fraunces] text-4xl opacity-40">Sunnyside</p>
        </div>
        <div className="max-w-[240px] md:max-w-[300px] m-auto mt-16 ">
          <ul className="flex justify-between   text-xl [&>li]:font-semibold [&>li>a]:opacity-40 ">
            <li>
              <a href="#" className="hover:underline hover:text-white hover:opacity-100 ">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline hover:text-white hover:opacity-100 ">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline hover:text-white hover:opacity-100 ">
                Projects
              </a>
            </li>
          </ul>
        </div>
        <div>
          <div className="flex justify-between max-w-[197px] m-auto mt-16 lg:mt-16">
            <div>
              <a href="https://facebook.com" target="_blank" rel="noreferrer">
                <img src="/iconos/icon-facebook.svg" alt="Facebook.jpg" />
              </a>
            </div>
            <div>
              <a href="https://instagram.com" target="_blank" rel="noreferrer">
                <img src="/iconos/icon-instagram.svg" alt="Instagram.jpg" />
              </a>
            </div>
            <div>
              <a href="https://twitter.com" target="_blank" rel="noreferrer">
                <img src="/iconos/icon-twitter.svg" alt="Twitter.jpg" />
              </a>
            </div>
            <div>
              <a href="https://pinterest.com" target="_blank" rel="noreferrer">
                <img src="/iconos/icon-pinterest.svg" alt="Pinterest.jpg" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

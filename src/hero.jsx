export const Hero = () => {
  return (
    <div>
      <section className="flex-col">
        <div>
          <div className="sm:flex">
            <div className="order-2 w-full m-auto ">
              <img src="/celular/image-transform.jpg" className="w-full " />
            </div>
            <div className="items-center justify-center w-full m-auto text-center sm:text-left">
              <div className=" max-w-[322px] xl:max-w-[390px] m-auto pb-8 pt-8">
                <p className="font-[fraunces] text-3xl pb-4 text-[#23303e] xl:text-5xl xl:w-full">
                  Transform your brand
                </p>
                <p className="font-bold text-[#5a636c]  text-lg xl:text-2xl xl:pb-6 xl:pt-8">
                  We are full-service creative agency specializing in helping brands grows fast.
                  Engage your clients througth compelling visuals that do most of the marketing for
                  you.
                </p>
                <p className="font-[fraunces] pt-8 m-auto xl:text-2xl ">
                  <a
                    href="#"
                    className="px-2 rounded-full hover:bg-gradient-to-t hover:from-yellow-200 hover:to-white ">
                    LEARN MORE
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="sm:flex">
            <div className="w-full m-auto">
              <img src="../public/celular/image-stand-out.jpg" className="w-full" />
            </div>
            <div className="items-center justify-center w-full m-auto text-center sm:text-left">
              <div className=" max-w-[320px] xl:max-w-[390px]  m-auto pb-8 pt-8">
                <p className="font-[fraunces] text-3xl pb-4 text-[#23303e] xl:text-5xl xl:w-full ">
                  Stand out to the right audience
                </p>
                <p className="font-bold text-[#5a636c]  text-md  xl:text-2xl xl:pb-6 xl:pt-8">
                  Using a collaborative formula of designers, researchers, photographers,
                  videographers, and copywriters, we&apos;ll build and extend your brand in digital
                  places.
                </p>
                <p className="font-[fraunces] mt-10 text-sm xl:text-2xl">
                  <a
                    href="#"
                    className="px-2 rounded-full hover:bg-gradient-to-t hover:from-rose-300 hover:to-white">
                    LEARN MORE
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Fotos dobles / Naranja */}
          <div className="justify-center  sm:mt-0 sm:flex">
            <div className="relative md:flex sm:w-3/6 ">
              <div className="flex items-center justify-center w-full m-auto ">
                <div className="absolute text-center -translate-x-2/4 -translate-y-1/2 top-3/4 left-2/4 bottom-4/4  right-2/4 w-full md:max-w-[325px] xl:max-w-[325px]">
                  <p className="text-xl  font-[fraunces] pb-2 xl:text-4xl m-auto ">
                    {" "}
                    Graphic design
                  </p>
                  <p className="text-center text-md font-semibold w-full xl:text-xl max-w-[297px]  sm:max-w-[297px] px-2 m-auto xl:max-w-[297px] ">
                    Great design makes you memorable. We deliver arwtwork that underscores your
                    brand message and captures potential clients attention.
                  </p>
                </div>
                <img src="../public/Compu/image-graphic-design.jpg" className="w-full" />
              </div>
            </div>

            {/* Cerezas */}
            <div className="relative sm:flex sm:w-3/6">
              <div className="flex items-center justify-center w-full m-auto">
                <div className="absolute w-full text-center -translate-y-1/2 -translate-x-2/4 top-3/4 left-2/4 right-2/4 bottom-4/4">
                  <p className="text-xl font-[fraunces] pb-2 xl:text-4xl  m-auto"> Photography</p>
                  <p className="text-center font-semibold xl:text-xl  text-md w-full max-w-[297px] px-2  sm:max-w-[297px] xl:max-w-[297px]  m-auto">
                    Increase your credibility by getting the most stunning, high-quality photos that
                    improve your business image.
                  </p>
                </div>
                <img src="/Compu/image-photography.jpg" className="w-full" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

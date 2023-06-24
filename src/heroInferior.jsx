export const HeroInferior = () => {
  return (
    <div>
      <section className="w-full text-center">
        {/* Titulo Testimonios */}
        <div className="m-auto text-center p-6 mt-10">
          <p className=" font-[fraunces] tracking-widest text-[#5a636c] p-2 mx-auto text-2xl">
            CLIENT TESTIMONIALS
          </p>
        </div>

        {/* Queries */}
        <div className="flex-col lg:flex lg:flex-row lg:justify-between mt-16">
          {/* Clientes y descripcion / 1-Emily */}
          <div className="flex-col w-full mb-10 sm:mt-0">
            <div className="justify-center items-center">
              <div>
                <img
                  src="/iconos/image-emily.jpg"
                  alt="Emily picture"
                  className="h-24 w-24 m-auto p-2 rounded-full"
                />
              </div>
              <div className="p-6 m-auto">
                <p className="pb-6  max-w-[320px] md:max-w-[342px]  m-auto font-bold text-[#5a636c] sm:text-xl">
                  We put our trust in Sunnyside and they delivered, making sure our needs were met
                  and deadlines were always hit.
                </p>
                <p className="p-4 text-[#23303e] font-bold text-xl font-[fraunces] sm:text-xl">
                  Emily R.
                </p>
                <p className="text-[#5a636c] sm:text-xl">Marketing Director</p>
              </div>
            </div>
          </div>

          {/* Clientes y descripcion / 2-Thomas */}
          <div className="flex-col w-full mb-10 sm:mt-0">
            <div className="justify-center items-center">
              <div>
                <img
                  src="/iconos/image-thomas.jpg"
                  alt="Thomas picture"
                  className="h-24 w-24 m-auto p-2 rounded-full"
                />
              </div>
              <div className="p-6 m-auto">
                <p className="max-w-[320px] md:max-w-[342px]   pb-6 m-auto font-bold text-[#5a636c] sm:text-xl">
                  Sunnyside&apos;s enthusiasm coupled whit their keen interest in our brand&apos;s
                  success made it a satisfying and enjoyable experience.
                </p>
                <p className="p-4 text-[#23303e] font-bold text-xl font-[fraunces] sm:text-md">
                  Thomas S.
                </p>
                <p className="text-[#5a636c] sm:text-xl">Chief Operating Officer</p>
              </div>
            </div>
          </div>
          {/* Clientes y descripcion / 1-unknown */}
          <div className="flex-col  w-full mb-10 sm:mt-0">
            <div className="justify-center items-center ">
              <div>
                <img
                  src="/iconos/image-jennie.jpg"
                  alt="Jennie picture"
                  className="h-24 w-24 m-auto p-2 rounded-full"
                />
              </div>
              <div className="p-6 m-auto">
                <p className="pb-6 max-w-[320px] md:max-w-[342px]  m-auto font-bold text-[#5a636c] md:text-xl">
                  Incredible end result! Our sales increased over 400% when we worked whit
                  Sunnyside. Highly recommended!
                </p>
                <p className=" p-4 text-[#23303e] font-bold text-xl font-[fraunces] md:text-xl">
                  Jennie F.
                </p>
                <p className="text-[#5a636c] m-auto md:text-xl">Bussines owner</p>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Fotos */}
        <div className="mt-16">
          <div className="flex">
            <div className="md:flex">
              <div>
                <img
                  src="/Compu/image-gallery-milkbottles.jpg"
                  alt=""
                  className=" w-full max-w-auto"
                />
              </div>
              <div>
                <img src="/Compu/image-gallery-sugarcubes.jpg" alt="" className=" max-w-auto" />
              </div>
            </div>
            <div className="md:flex">
              <div>
                <img src="/Compu/image-gallery-orange.jpg" alt="" className=" max-w-auto" />
              </div>
              <div>
                <img src="/Compu/image-gallery-cone.jpg" alt="" className="max-w-auto" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

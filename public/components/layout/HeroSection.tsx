import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className="my-12 mx-4 sm:mx-8 md:mx-12 lg:mx-[220px] bg-white">
      <div className="flex flex-col md:flex-row gap-8 items-stretch">
        <div className="relative w-full md:w-1/2 min-w-0 min-h-[300px]">
          <Image
            src="/imgi_5_chef.jpg"
            alt="Hero Image"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        <div className="w-full md:w-1/2 min-w-0 flex flex-col items-start justify-between p-8 gap-4">
          <h1 className="text-[#1E1D94] text-[32px]">Over Ons</h1>
          <p className="text-black text-[14px]">
            Bij Yannick&apos;s Catering combineren we passie voor koken met professionele service.
            Met jarenlange ervaring in de horeca zorgen wij ervoor dat elk evenement een culinair
            succes wordt. Onze focus ligt op verse ingrediënten, creativiteit in de keuken en
            persoonlijke aandacht voor onze klanten.
          </p>
          <p className="text-black text-[14px]">
            Of het nu gaat om een intiem diner, een groot bedrijfsevenement of restaurantondersteuning,
            wij leveren maatwerk dat perfect aansluit bij uw wensen en verwachtingen.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
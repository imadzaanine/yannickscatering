import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className="my-12 mx-55 bg-white">
      <div className="flex">
        <Image 
          src="/imgi_5_chef.jpg" 
          alt="Hero Image" 
          width={500} 
          height={354} 
          className="w-full h-auto" 
        />
        <div className="flex flex-col items-start justify-between p-8 ">
          <h1 className="text-[#1E1D94] text-[32px]">Over Ons</h1>
          <p className="text-black text-[14px]">Bij Yannick's Catering combineren we passie voor koken met professionele service. Met jarenlange ervaring in de horeca zorgen wij ervoor dat elk evenement een culinair succes wordt. Onze focus ligt op verse ingrediënten, creativiteit in de keuken en persoonlijke aandacht voor onze klanten.</p>
          <p className="text-black text-[14px]">Of het nu gaat om een intiem diner, een groot bedrijfsevenement of restaurantondersteuning, wij leveren maatwerk dat perfect aansluit bij uw wensen en verwachtingen.</p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
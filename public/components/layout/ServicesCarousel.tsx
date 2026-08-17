'use client'

import React, { useRef, useEffect } from "react";

const services = [
  {
    image: "/imgi_2_table.jpg",
    title: "Groep Events",
    text: [
      "Geniet van heerlijk eten met je groep, zonder zorgen! Of het nu gaat om een bedrijfslunch, familiebijeenkomst of feest, wij verzorgen smaakvolle en gevarieerde catering op maat. Verse ingrediënten, topkwaliteit en een service die bij jouw evenement past.",
    ],
  },
  {
    image: "/imgi_3_corporate.jpg",
    title: "Restaurant MEP",
    text: [
      "Heb je extra ondersteuning nodig in de keuken? Wij bieden professionele mise en place-services voor restaurants, zodat jouw team zich kan focussen op service en presentatie. Van het voorbereiden van ingrediënten tot het portioneren en sauzen klaarmaken. Wij zorgen voor een efficiënte en gestroomlijnde keuken. Bespaar tijd en verhoog de productiviteit met onze betrouwbare mise en place-oplossingen.",
    ],
  },
  {
    image: "/imgi_4_salmon.jpg",
    title: "Private Parties",
    text: [
      "Maak van jouw privéfeest een onvergetelijke ervaring met onze exclusieve catering. Of het nu gaat om een verjaardagsfeest, een jubileum of een intieme bijeenkomst, wij verzorgen heerlijke gerechten en een topservice op maat. Van luxe hapjes tot uitgebreide diners, wij nemen alles uit handen, zodat jij zorgeloos kunt genieten met jouw gasten.",
    ],
  },
];

const ServicesCarousel: React.FC = () => {
  const blockRefs = useRef<(HTMLDivElement | null)[]>([]);
  const baseImgRef = useRef<HTMLImageElement>(null);
  const nextImgRef = useRef<HTMLImageElement>(null);
  const currentImageIndex = useRef(-1);

  useEffect(() => {
    // Preload images
    services.forEach(({ image }) => {
      const img = new Image();
      img.src = image;
    });

    let ticking = false;

    const updateSlide = () => {
      const baseImg = baseImgRef.current;
      const nextImg = nextImgRef.current;

      if (!baseImg || !nextImg) return;

      const triggerY = window.innerHeight * 0.5;

      let currentIndex = 0;
      let progress = 0;

      for (let i = 0; i < services.length; i++) {
        const el = blockRefs.current[i];
        if (!el) continue;

        const rect = el.getBoundingClientRect();
        const isLast = i === services.length - 1;

        if (rect.bottom > triggerY || isLast) {
          currentIndex = i;

          if (!isLast) {
            const fadeZone = rect.height * 0.4;
            const fadeStart = rect.bottom - fadeZone;

            progress = Math.max(
              0,
              Math.min(1, (triggerY - fadeStart) / fadeZone)
            );
          }

          break;
        }
      }

      const nextIndex = Math.min(currentIndex + 1, services.length - 1);

      if (currentImageIndex.current !== currentIndex) {
        baseImg.src = services[currentIndex].image;
        nextImg.src = services[nextIndex].image;
        currentImageIndex.current = currentIndex;
      }

      nextImg.style.transform = `translate3d(0, ${(1 - progress) * 100}%, 0)`;
    };

    const handleScroll = () => {
      if (ticking) return;

      ticking = true;

      requestAnimationFrame(() => {
        updateSlide();
        ticking = false;
      });
    };

    updateSlide();

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <section className="my-8 mx-4 sm:mx-8 md:mx-16">
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-8">

        {/* Sticky image */}
        <div className="sticky top-20 h-[38vh] md:h-screen w-full overflow-hidden mb-4 md:mb-0 md:flex md:items-center md:justify-center rounded-xl md:rounded-none md:[grid-column:1] md:[grid-row:1/-1]">
          <div className="relative w-full h-full md:w-full md:max-w-md md:aspect-square md:h-auto overflow-hidden">

            <img
              ref={baseImgRef}
              src={services[0].image}
              alt=""
              draggable={false}
              className="absolute inset-0 w-full h-full object-cover will-change-transform select-none"
            />

            <img
              ref={nextImgRef}
              src={services[1].image}
              alt=""
              draggable={false}
              className="absolute inset-0 w-full h-full object-cover will-change-transform select-none"
              style={{
                transform: "translate3d(0,100%,0)",
                backfaceVisibility: "hidden",
              }}
            />
          </div>
        </div>

        {/* Text blocks */}
        {services.map((service, i) => (
          <div
            key={i}
            ref={(el) => {
              blockRefs.current[i] = el;
            }}
            className="md:[grid-column:2] min-h-[45vh] md:min-h-[80vh] flex flex-col justify-center gap-3 md:gap-4 p-4 md:p-8"
          >
            <h2 className="text-[#1E1D94] text-[22px] md:text-[32px]">
              {service.title}
            </h2>

            {service.text.map((paragraph, j) => (
              <p
                key={j}
                className="text-black text-[14px] md:text-base leading-relaxed"
              >
                {paragraph}
              </p>
            ))}
          </div>
        ))}

        <div className="md:[grid-column:2] h-[20vh] md:h-[60vh]" />
      </div>
    </section>
  );
};

export default ServicesCarousel;
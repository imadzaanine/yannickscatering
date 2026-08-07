'use client'

import React, { useRef, useEffect, useState } from "react";

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
    text: ["Heb je extra ondersteuning nodig in de keuken? Wij bieden professionele mise en place-services voor restaurants, zodat jouw team zich kan focussen op service en presentatie. Van het voorbereiden van ingrediënten tot het portioneren en sauzen klaarmaken. Wij zorgen voor een efficiënte en gestroomlijnde keuken. Bespaar tijd en verhoog de productiviteit met onze betrouwbare mise en place-oplossingen."],
  },
  {
    image: "/imgi_4_salmon.jpg",
    title: "Private Parties",
    text: ["Maak van jouw privéfeest een onvergetelijke ervaring met onze exclusieve catering. Of het nu gaat om een verjaardagsfeest, een jubileum of een intieme bijeenkomst, wij verzorgen heerlijke gerechten en een topservice op maat. Van luxe hapjes tot uitgebreide diners, wij nemen alles uit handen, zodat jij zorgeloos kunt genieten met jouw gasten."],
  },
]

const ServicesCarousel: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const blockRefs = useRef<(HTMLDivElement | null)[]>([])
  const baseImgRef = useRef<HTMLImageElement>(null)
  const nextImgRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
  let ticking = false

  const updateSlide = () => {
    const baseImg = baseImgRef.current
    const nextImg = nextImgRef.current
    if (!baseImg || !nextImg) return

    const transitionDistance = window.innerHeight * 0.5
    const scrollY = window.scrollY

    let currentIndex = services.length - 1
    let progress = 1

    for (let i = 0; i < services.length - 1; i++) {
      const block = blockRefs.current[i]
      if (!block) continue

      const blockTop = block.offsetTop
      const blockHeight = block.offsetHeight
      const blockEnd = blockTop + blockHeight

      // transition happens only during the LAST transitionDistance px of this block
      const start = blockEnd - transitionDistance
      const end = blockEnd

      const raw = (scrollY - start) / (end - start)
      const clamped = Math.max(0, Math.min(1, raw))

      if (clamped < 1) {
        currentIndex = i
        progress = clamped
        break
      }
    }

    const nextIndex = Math.min(currentIndex + 1, services.length - 1)

    baseImg.src = services[currentIndex].image
    nextImg.src = services[nextIndex].image

    const translateY = (1 - progress) * 100
    nextImg.style.transition = 'none'
    nextImg.style.transform = `translateY(${translateY}%)`

    setActiveIndex(currentIndex)
    ticking = false
  }

  const handleScroll = () => {
    if (ticking) return
    ticking = true
    requestAnimationFrame(updateSlide)
  }

  window.addEventListener('scroll', handleScroll, { passive: true })
  updateSlide()

  return () => window.removeEventListener('scroll', handleScroll)
}, [])

  return (
    <section className="flex gap-8 my-8 mx-15">

      <div className="w-1/2">
        <div className="sticky top-0 h-screen flex items-center justify-center">
          <div className="relative aspect-square w-full max-w-md overflow-hidden">
            <img
              ref={baseImgRef}
              src={services[0].image}
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
            />
            <img
              ref={nextImgRef}
              src={services[1].image}
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
              style={{ transform: 'translateY(100%)' }}
            />
          </div>
        </div>
      </div>

      <div className="w-1/2">
        {services.map((service, i) => (
          <div
            key={i}
            ref={(el) => { blockRefs.current[i] = el }}
            data-index={i}
            className="min-h-[80vh] flex flex-col items-start justify-center gap-4 p-8"
          >
            <h1 className="text-[#1E1D94] text-[32px]">{service.title}</h1>
            {service.text.map((p, j) => (
              <p key={j} className="text-black text-[14px]">{p}</p>
            ))}
          </div>
        ))}
        <div className="h-[60vh]" />
      </div>
    </section>
  )
}

export default ServicesCarousel
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
  const blockRefs = useRef<(HTMLDivElement | null)[]>([])
  const baseImgRef = useRef<HTMLImageElement>(null)
  const nextImgRef = useRef<HTMLImageElement>(null)
  const rafRef = useRef<number | null>(null)
  const blockOffsets = useRef<{ top: number; height: number }[]>([])

  useEffect(() => {
    // Preload every carousel image so later src swaps are instant (no decode stall mid-scroll)
    services.forEach((s) => {
      const img = new window.Image()
      img.src = s.image
    })

    const measureBlocks = () => {
      blockOffsets.current = blockRefs.current.map((block) => {
        if (!block) return { top: 0, height: 0 }
        return { top: block.offsetTop, height: block.offsetHeight }
      })
    }

    const updateSlide = () => {
      const baseImg = baseImgRef.current
      const nextImg = nextImgRef.current
      if (!baseImg || !nextImg || blockOffsets.current.length === 0) {
        rafRef.current = requestAnimationFrame(updateSlide)
        return
      }

      const transitionDistance = window.innerHeight * 0.5
      const scrollY = window.scrollY

      let currentIndex = services.length - 1
      let progress = 1

      for (let i = 0; i < services.length - 1; i++) {
        const offset = blockOffsets.current[i]
        if (!offset) continue

        const blockEnd = offset.top + offset.height
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

      if (baseImg.src.indexOf(services[currentIndex].image) === -1) {
        baseImg.src = services[currentIndex].image
      }
      if (nextImg.src.indexOf(services[nextIndex].image) === -1) {
        nextImg.src = services[nextIndex].image
      }

      const translateY = (1 - progress) * 100
      nextImg.style.transform = `translate3d(0, ${translateY}%, 0)`

      rafRef.current = requestAnimationFrame(updateSlide)
    }

    measureBlocks()
    rafRef.current = requestAnimationFrame(updateSlide)

    const imgs = Array.from(document.querySelectorAll('img'))
    let pending = imgs.filter((img) => !img.complete).length
    const onImgLoad = () => {
      pending -= 1
      if (pending <= 0) measureBlocks()
    }
    imgs.forEach((img) => {
      if (!img.complete) img.addEventListener('load', onImgLoad)
    })

    const handleResize = () => measureBlocks()
    window.addEventListener('resize', handleResize)

    const safetyTimeout = setTimeout(measureBlocks, 300)

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      window.removeEventListener('resize', handleResize)
      imgs.forEach((img) => img.removeEventListener('load', onImgLoad))
      clearTimeout(safetyTimeout)
    }
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
              style={{ transform: 'translate3d(0, 100%, 0)', willChange: 'transform' }}
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
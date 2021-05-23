import { Container } from "@chakra-ui/react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"

import { api } from '../../../services/api'

import { Slide } from "./Slide"
import { useEffect, useState } from "react"

export function Carousel() {
  const [ref] = useKeenSlider<HTMLDivElement>()

  const [continentContent, setContinentContent] = useState<any>([])

  useEffect(() => {
    api.get('continents')
      .then(response => setContinentContent(response.data.continents))
  })

  return (
    <Container className="keen-slider"
      ref={ref}  
      maxW="1240px" 
      my="12" 
      padding="0"
      cursor="pointer"
    >
      {continentContent.map(continent => {
        <Slide city={continent.coverImage} continent={continent.name} abstract={continentContent.description} />

      })}
      <Slide city="florida" continent="América do Norte" abstract="Viva o seu próprio filme" />
      <Slide city="brazil" continent="América do Sul" abstract="Desfrute o máximo da natureza" />
      <Slide city="japan" continent="Ásia" abstract="O continente com mais tradição" />
      <Slide city="australia" continent="Oceania" abstract="O continente mais exótico" />
      <Slide city="south-africa" continent="África" abstract="Continente rico em biodiversidade e multicultural" />
    </Container>
  )
} 
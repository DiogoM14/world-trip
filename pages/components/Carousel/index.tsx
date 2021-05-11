import { Container, Image } from "@chakra-ui/react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"

export function Carousel() {
  const [ref] = useKeenSlider<HTMLDivElement>()

  return (
    <Container ref={ref} className="keen-slider" maxW="1240px" px="100px" my="12">
      <div className="keen-slider__slide" style={{ width: "100%", height: "450px" }}>
        <Image objectFit="cover" src="porto.jpg" />
      </div>
      <div className="keen-slider__slide" style={{ maxWidth: "1240px", height: "450px" }}>
        <Image objectFit="cover" w="100%" src="florida.jpg" />
      </div>
    </Container>
  )
} 
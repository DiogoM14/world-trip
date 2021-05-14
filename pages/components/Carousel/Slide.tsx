import { Box, Container, Flex, Image, Text } from "@chakra-ui/react"

interface SlideProps {
  city: string
  continent: string
  abstract: string
}

export function Slide({ city, continent, abstract }: SlideProps) {
  return (
    <Container className="keen-slider__slide">
      <Flex
        pos="relative"
      >
        <Image 
          borderRadius="5" 
          w="100%"  
          objectFit="cover"
          filter="brightness(65%)"
          height="450px" 
          src={`${city}.jpg`}
        />

        <Box 
          pos="absolute"
          w="100%"
          align="center"
          mt="170px"
        >
          <Text fontSize="3rem" fontWeight="700" color="gray.10">{continent}</Text>
          <Text fontSize="1.5rem" fontWeight="700" color="gray.50">{abstract}</Text>
        </Box>
      </Flex>
    </Container>
  )
}
import { Container, Image } from "@chakra-ui/react"

export function Header() {
  return (
    <Container
      as="header"
      maxW="container.lg"
      centerContent
    >
      <Image 
        p="4"
        src="logo.svg"
      />
    </Container>
  )
}
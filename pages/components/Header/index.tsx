import { Container, Image } from "@chakra-ui/react"
import { useRouter } from 'next/router'
import { FiArrowLeft } from 'react-icons/fi'

interface HeaderProps {
  showBack?: boolean
}

export function Header({ showBack = true }: HeaderProps) {
  const router = useRouter();

  return (
    <Container
      as="header"
      // maxW="container.lg"
      w="100%"
      centerContent
      pos="relative"
    >
      { showBack && (
        <Container
          pos="absolute"
          left="0"
        >
          <FiArrowLeft cursor="pointer" fontSize="1.5rem" onClick={() => router.back()} />
        </Container>
      )}
        <Image 
          p="4"
          src="logo.svg"
        />
    </Container>
  )
}
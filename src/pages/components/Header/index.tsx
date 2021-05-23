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
      maxW="container.lg"
      pos="relative"
      centerContent
    >
      { showBack && (
        <Container
          pos="absolute"
          left="0"
          display="flex"
          alignItems="center"
          h="100%"
          ml="1rem"
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
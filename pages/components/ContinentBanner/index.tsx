import { Container, Flex, Image, Text } from "@chakra-ui/react";

interface ContinentBannerProps {
  continent: string
}

export function ContinentBanner({ continent }: ContinentBannerProps) {
  return (
    <Flex
      w="100%"
      maxW="1440px"
    >
      <Flex
        pos="relative"
        m="0 auto"
      >
        <Image 
          w="100%"
          maxH="500px"
          filter="brightness(65%)"
          src="porto.jpg" 
        />

        <Text 
          pos="absolute"
          left="0"
          bottom="0"
          fontWeight="semibold"
          color="gray.10"
          fontSize="3rem"
          margin="0 0 60px 140px"
        >
          {continent}
        </Text>
      </Flex>
    </Flex>
  )
}
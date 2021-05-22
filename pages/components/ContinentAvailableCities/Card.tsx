import { Box, Flex, Image, Text } from "@chakra-ui/react"

export function Card() {
  return (
    <Box
      maxW="256px"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
    >
      <Image 
      objectFit="cover"
        maxH="173px"
        h="100%"
        src="porto.jpg" 
      />

      <Box
        p="6"
        flexDir="row"
      >
        <Flex
          flexDir="row"
          justify="space-between"
        >
          <Flex flexDir="column">
            <Text mb="1rem">Londres</Text>
            <Text>Reino Unido</Text>
          </Flex>

          <Image objectFit="contain" src="UK.png" />
        </Flex>
      </Box>
    </Box>
  )
}
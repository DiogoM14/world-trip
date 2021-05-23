import { Box, Flex, Image, Text, useBreakpointValue } from "@chakra-ui/react";

export function Banner() {
  const showPlaneImage = useBreakpointValue({

  })


  return (
    <Flex
      justifyContent="space-between"
      pos="relative"
      align="center"
    >
      <Image src="landing-bg.png" />

        <Flex
          pos="absolute"
          justify={["center" ,"space-between"]}
          align="center"
          w="100%"
          px={["16", "16"]}

        >
          <Box>
            <Text 
              fontSize={["2xl", "4xl"]} 
              color="#fff"
              maxW="426px"
              mb={["0", "4"]}
            >
              5 Continentes, infinitas possibilidades.
            </Text>
            <Text 
              fontSize="xl" 
              color="gray.50"
              maxW="524px"
            >
              Chegou a hora de tirar do papel a viagem que você sempre sonhou. 
            </Text>
          </Box>
          
          <Image src="airplane.png" />
        </Flex>
    </Flex>
  )
}
import { Flex, SimpleGrid, Text } from "@chakra-ui/react"
import { Card } from "./Card"

export function ContinentAvailableCities() {
  return (
    <Flex
      flexDir="column"
      marginY="20"
      maxW="1160px"
      w="100%"
    >
      <Text
        fontSize="2.25rem"
        fontWeight="medium"
        mb="20"
      >
        Cidades +100
      </Text>

      <SimpleGrid inChildWidth="256px" columns={4} spacing={10}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </SimpleGrid>
    </Flex>
  )
}
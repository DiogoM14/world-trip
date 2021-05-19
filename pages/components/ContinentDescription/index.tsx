import { Flex, Text, Wrap, WrapItem } from "@chakra-ui/react";

export function ContinentDescription() {
  return (
    <Flex maxW="1160px">
      <Wrap maxW="600px">
        <Text
          color="gray.700"
        >
          A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
        </Text>
      </Wrap>
      <Wrap display="flex" w="100%" justifyContent="space-around">
          <WrapItem 
            display="flex" 
            flexDir="column"
            align="center"
          >
            <Text 
              color="yellow.900"
              fontWeight="semibold"
              fontSize="3xl"
            >50</Text>
            <Text
              color="gray.700"
              fontWeight="semibold"
              fontSize="medium"
            >Países</Text>
          </WrapItem>
          <WrapItem 
            display="flex" 
            flexDir="column"
            align="center"
          >
            <Text 
              color="yellow.900"
              fontWeight="semibold"
              fontSize="3xl"
            >50</Text>
            <Text
              color="gray.700"
              fontWeight="semibold"
              fontSize="medium"
            >Países</Text>
          </WrapItem>
          <WrapItem 
            display="flex" 
            flexDir="column"
            align="center"
          >
            <Text 
              color="yellow.900"
              fontWeight="semibold"
              fontSize="3xl"
            >50</Text>
            <Text
              color="gray.700"
              fontWeight="semibold"
              fontSize="medium"
            >Países</Text>
          </WrapItem>
      </Wrap>
    </Flex>
  )
}
import { Container, Flex, Text, Wrap, WrapItem } from "@chakra-ui/react";

export function ContinentDescription() {
  return (
    <Flex maxW="1160px">
      <Wrap>
        <Text>A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste</Text>
      </Wrap>
      <Wrap>
        <WrapItem>
          <Text>50</Text>
          <Text>Países</Text>
          <Text>50</Text>
          <Text>Países</Text>
          <Text>50</Text>
          <Text>Países</Text>
        </WrapItem>
      </Wrap>
    </Flex>
  )
}
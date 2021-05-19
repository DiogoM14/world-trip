import { Container, Flex, Grid, GridItem, Text, Wrap, WrapItem } from "@chakra-ui/react";

export function ContinentDescription() {
  return (
    <Grid templateColumns="repeat(3, 1fr)" gap={6}>
      <GridItem colSpan={2}>
        <Text>A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste</Text>
      </GridItem>
      <GridItem>
        <WrapItem>
          <Text>50</Text>
          <Text>Países</Text>
          <Text>50</Text>
          <Text>Países</Text>
          <Text>50</Text>
          <Text>Países</Text>
        </WrapItem>
      </GridItem>
    </Grid>
  )
}
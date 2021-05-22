import { Flex, Grid, GridItem, Text, Wrap, WrapItem } from "@chakra-ui/react";
import { Info } from "./Info";

export function ContinentDescription() {
  return (
    <Grid templateColumns="repeat(3, 1fr)" gap={8} maxW="1160px" mt="20" marginX="5">
      <GridItem colSpan={2}>
        <Text
          color="gray.700"
          fontSize="1.5rem"
          textAlign="justify"
        >
          A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
        </Text>
      </GridItem>
      <GridItem 
        display="flex" 
        w="100%" 
        justifyContent="space-around"
      >
        <Info description="Países" quantity={50} />
        <Info description="Linguas" quantity={60} />
        <Info description="Cidades +100" quantity={27} />
      </GridItem>
    </Grid>
  )
}
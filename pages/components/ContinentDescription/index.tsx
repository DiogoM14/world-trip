import { Flex, Grid, GridItem, Text, Wrap, WrapItem } from "@chakra-ui/react";

export function ContinentDescription() {
  return (
    <Grid templateColumns="repeat(3, 1fr)" gap={6}>
      <GridItem colSpan={2}>
        <Text
          color="gray.700"
        >
          A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
        </Text>
      </GridItem>
      <GridItem display="flex" w="100%" justifyContent="space-around">
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
      </GridItem>
    </Grid>
  )
}
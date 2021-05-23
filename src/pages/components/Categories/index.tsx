import { Flex, Grid } from "@chakra-ui/react"
import { Category } from "./Category"

export function Categories() {
  return (
    <Flex
    mt={20}
    >
      <Grid templateColumns="repeat(5, 1fr)" gap={32}>
        <Category  
          iconName="cocktail"
          description="Vida noturna"
        />
        
        <Category  
          iconName="surf"
          description="Praia"
        />
        
        <Category  
          iconName="building"
          description="Moderno"
        />
        
        <Category  
          iconName="museum"
          description="Clássico"
        />
        
        <Category  
          iconName="world"
          description="E mais..."
        />
      </Grid>
    </Flex>
    )
  }
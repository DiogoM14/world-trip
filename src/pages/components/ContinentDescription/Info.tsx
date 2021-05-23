import { Text, WrapItem } from "@chakra-ui/react"

interface InfoProps {
  quantity: number
  description: string
}

export function Info({ description, quantity }: InfoProps) {
  return (
    <WrapItem
      display="flex" 
      flexDir="column"
      alignItems="center"
      marginX="22px"
    >
      <Text 
        color="yellow.900"
        fontWeight="semibold"
        fontSize="5xl"
      >
        {quantity}
      </Text>
      <Text
        color="gray.700"
        fontWeight="semibold"
        fontSize="2xl"
      >
        {description}
      </Text>
    </WrapItem>
    )
  }
import { Box, Image, Text } from "@chakra-ui/react"

interface CategoryProps {
  iconName: string
  description: string
} 

export function Category({ iconName, description }: CategoryProps) {
  return (
    <Box align="center">
      <Image w={20} src={`${iconName}.svg`} />
        <Text
          fontSize={24}
          fontWeight="medium"
          mt={6}
        >
          {description}
        </Text>
    </Box>
  )
}
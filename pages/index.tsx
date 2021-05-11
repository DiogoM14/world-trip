import { Divider, Flex } from '@chakra-ui/react'

import { Banner } from './components/Banner'
import { Categories } from './components/Categories'
import { Header } from './components/Header'
import { LandingTitle } from './components/LandingTitle'

export default function Home() {
  return (
    <Flex
      flexDir="column"
      align="center"
    >
      <Header />
      <Banner />
      <Categories />

      <Divider 
        w={22}
        borderBottomWidth="2px"
        borderColor="gray.700"
        opacity={1}
        marginY="16"
      />

      <LandingTitle />
    </Flex>
  )
}

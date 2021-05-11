import { Divider, Flex } from '@chakra-ui/react'
import Head from 'next/head'

import { Banner } from './components/Banner'
import { Carousel } from './components/Carousel'
import { Categories } from './components/Categories'
import { Header } from './components/Header'
import { LandingTitle } from './components/LandingTitle'

export default function Home() {
  return (
    <Flex
    flexDir="column"
      align="center"
    >
      <Head>
        <title>Home | World travel</title>
      </Head>

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

      <Carousel />
    </Flex>
  )
}

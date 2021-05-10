import { Flex } from '@chakra-ui/react'
import Head from 'next/head'
import { Banner } from './components/Banner'
import { Header } from './components/Header'

export default function Home() {
  return (
    <Flex
      flexDir="column"
      align="center"
    >
      <Header />
      <Banner />
    </Flex>
  )
}

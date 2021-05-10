import { Flex } from '@chakra-ui/react'
import { Banner } from './components/Banner'
import { Categories } from './components/Categories'
import { Header } from './components/Header'

export default function Home() {
  return (
    <Flex
      flexDir="column"
      align="center"
    >
      <Header />
      <Banner />
      <Categories />
    </Flex>
  )
}

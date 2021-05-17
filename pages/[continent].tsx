import { GetServerSideProps } from "next"
import Head from "next/head"
import { Container, Flex } from "@chakra-ui/react"
import { Header } from "./components/Header"
import { ContinentBanner } from "./components/ContinentBanner"

export default function ContinentPage({ continent }) {
  return (
    <Flex
      flexDir="column"
      align="center"
    >
      <Head>
        <title>{continent} | World travel</title>
      </Head>

      <Header />

      <ContinentBanner continent={continent} />
    </Flex>
  )
} 

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { continent } = params 

  return {
    props: {
      continent
    }
  }
}
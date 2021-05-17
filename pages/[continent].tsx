import { GetServerSideProps } from "next"
import Head from "next/head"
import { Flex } from "@chakra-ui/react"
import { Header } from "./components/Header"
import { ContinentBanner } from "./components/ContinentBanner"
import { ContinentDescription } from "./components/ContinentDescription"

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
      <ContinentDescription />
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
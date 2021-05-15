import { Container } from "@chakra-ui/react"
import { GetServerSideProps } from "next"
import Head from "next/head"
import { Header } from "./components/Header"

export default function ContinentPage({ continent }) {
  return (
    <Container>
      <Head>
        <title>{continent} | World travel</title>
      </Head>
      <Header />

      
    </Container>
  )
} 

export const getServerSideProps: GetServerSideProps = async ({ req, params }) => {
  const { continent } = params 

  return {
    props: {
      continent
    }
  }
}
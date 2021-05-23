import { ChakraProvider } from "@chakra-ui/react"
import {createServer, Model} from "miragejs"
import { theme } from "../styles/theme"

createServer({
  models: {
    continent: Model,
  },

  seeds(server) {
    server.db.loadData({
      continents: [
        {
          id: 1,
          name: "Europa",
          coverImage: "porto",
          description: "O continente mais antigo",
          content: {
            description: "A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste",
            countries: 50,
            though: 60,
            cities: 27
          },
          availableCities: {
            id: 0 ,
            city: "Londres",
            country: "Reino Unido",
            flag: "UK"
          }
        }
      ]
    })
  },

  routes() {
    this.namespace = 'api'

    this.get('/continents', () => {
      return this.schema.all('continent')
    })
  }
})


function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
import Category from './components/Category'
import Header from './components/Header'
import Hero from './components/Hero'
import Partner from './components/Partners'
import Vitrine from './components/Vitrine'
import VitrineSecond from './components/VitrineSecond'
import { GlobalCss, Container } from './styles'

function App() {
  return (
    <>
      <GlobalCss />
      <Container>
        <Header />
      </Container>
        <Hero />
        <Category />
        <Vitrine />
        <Partner />
        <VitrineSecond />
        <Partner />
    </>
  )
}

export default App

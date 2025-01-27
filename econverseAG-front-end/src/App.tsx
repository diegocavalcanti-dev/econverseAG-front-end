import Category from './components/Category'
import Header from './components/Header'
import Hero from './components/Hero'
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
    </>
  )
}

export default App

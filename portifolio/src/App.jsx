import Header from "./components/Header/Header.jsx"
import Hero from "./components/Hero/Hero.jsx"
import {perfil} from './data/perfil.js'

function App() {

  return (
    <>
    <Header usuario={perfil.usuario}/>
    <main>
      <Hero
      nome={perfil.usuario}
      cargo={perfil.cargo}
      resumo={perfil.resumo}
      cidade={perfil.cidade}
      />
    </main>
    </>
  )
}
export default App

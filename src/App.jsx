import Navbar from './components/Navbar'
import Introduce from './components/Introduce'
import Skils from './components/Skils'
import Profile from './components/Profile'
import LanguageProvider from './context/LanguageContexts';
import Footer from './components/Footer'

function App() {


  return (
    <>
      <LanguageProvider>
        <Navbar />
        <Introduce />
        <Skils />
        <Profile />
        <Footer />
      </LanguageProvider>

    </>
  )
}

export default App
import FormularioColor from "./components/FormularioColor"

function App() {

  return (
    <>
      <main className="pt-3 fondoRosaClaro text-center">
        <h1>Paleta de colores 🎨</h1>
        <FormularioColor></FormularioColor>
      </main>
      <footer className="py-4 text-center fondoRosaOscuro">
        <p>&copy; Todos los derechos reservados - Claudia Ximena Barrientos</p>
      </footer>
      
    </>
  )
}

export default App

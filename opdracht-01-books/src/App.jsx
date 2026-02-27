import BooksWrapper from './components/BookWrapper.jsx'
import Header from './components/Header.jsx'
import Container from './components/Layout.jsx';

function App() {

  return (
    <>
      <Container>
        <Header />
        <h1 className="heading" >Opdracht 1 - Books</h1>
        <BooksWrapper />
      </Container>
    </>
  )
}

export default App

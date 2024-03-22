import{BrowserRouter,Routes,Route} from 'react-router-dom'
import Main from './pages/Main'
import Login from './pages/Login';
import Layout from './layouts/Layout'
import GlobalStyle from './styles/GlobalStyles';



function App() {
  return (
    <>
    <GlobalStyle/>
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Main/>}/>
            <Route path="main" element={<Main/>}/>
            <Route path="login" element={<Login/>}/>
          </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
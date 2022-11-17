//import logo from './logo.svg';
//import './App.css';
//import { AuthProvider } from "./auth"
import { Layout } from './components/Layout';
import '../src/assets/css/index.css'
import { AuthProvider } from "./auth"

function App() {
  return (
    <>
     <AuthProvider>
        <Layout/>
     </AuthProvider>
   
    </>
  );
}

export default App;

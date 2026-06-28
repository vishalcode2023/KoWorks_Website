import './App.css'
import { BrowserRouter } from "react-router-dom";
import MainRouter from './router/MainRouter'


export default function App() {
  return (
    <BrowserRouter>
      <MainRouter />
    </BrowserRouter>
  );
}
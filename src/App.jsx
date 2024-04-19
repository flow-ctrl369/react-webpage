// import "./App.css";
import CardData from "./components/Card/CardData.jsx";
import Navigation from "./components/Navigation/NavigationComponent.jsx";
import Header from "./components/Header/HeaderComponent.jsx";
import Footer from './components/Footer/FooterComponent.jsx'
function App() {
  return (
    <>
      <Navigation />
      <Header />

      <div className="card-container">
        <CardData />
        <Footer />
      </div>
    </>
  );
}

export default App;

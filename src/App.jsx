import "./App.css";
import CardData from "./components/Card/CardData.jsx";
import Navigation from "./components/Navigation/NavigationComponent.jsx";
import Header from "./components/Header/HeaderComponent.jsx";

function App() {
  return (
    <>
      <Navigation />
      <Header />

      {/* Components here */}
      <div className="card-container">
        <CardData />
      </div>
    </>
  );
}

export default App;

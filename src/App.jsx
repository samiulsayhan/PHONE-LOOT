import Hero from "./Components/Body/Hero/Hero";
import TopBar from "./Components/Header/MenuBar/TopBar";

function App() {
  return (
    <>
      <div className="bg-opacity-50 bg-slate-100">
        <TopBar></TopBar>
        <Hero></Hero>
      </div>
    </>
  );
}

export default App;

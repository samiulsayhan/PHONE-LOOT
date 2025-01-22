import BodyCart from "./Components/Body/BodyCart/BodyCart";
import Hero from "./Components/Body/Hero/Hero";
// import FetchCheck from "./Components/FetchCheck/FetchCheck";
import TopBar from "./Components/Header/MenuBar/TopBar";
import Footer from "./Components/Footer/Footer"


function App() {
  return (
    <>
      <div className=" bg-slate-100">
        <TopBar></TopBar>
        <Hero></Hero>
        {/* <FetchCheck></FetchCheck> */}
        <BodyCart></BodyCart>
        <Footer></Footer>
        
      </div>
    </>
  );
}

export default App;

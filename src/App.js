import Header from "./components/Header.js";
import Footer from "./partials/Footer.js";
import Stories from "./components/Stories.js";
import Middle from "./components/Middle.js";
import Mission from "./components/Mission.js";
function App() {
  return (
    <div className="">
      <Header/>
      <Mission />
      <Middle/>
      <Stories/>
      <Footer/>
    </div>
  );
}

export default App;

import {Provider} from "react-redux";
import store from "./store.js";
import Header from "./components/Header.js";
import Footer from "./partials/Footer.js";
import Stories from "./components/Stories.js";
import Middle from "./components/Middle.js";
import Mission from "./components/Mission.js";
function App() {
  return (
    <Provider store={store}>
    <div className="">
      <Header/>
      <Mission />
      <Middle/>
      <Stories/>
      <Footer/>
    </div>
    </Provider>
  );
}

export default App;

import store from "./store";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Error404 from "./containers/err/Error404";
import Home from "./containers/pages/Home";

function App() {
  return (
    <div>
     <Provider store={store}>
      <Router>
        <Routes>
          <Route path="*" element={<Error404/>}/>
          <Route path="/" element={<Home/>}/>

        </Routes>
      </Router>
    </Provider>
    </div>
  );
}

export default App;
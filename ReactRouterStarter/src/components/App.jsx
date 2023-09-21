import {Routes,Route} from "react-router-dom";
import "./App.css";
import Contact from "./Contact.jsx";
import Search from "./Search";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Search />}/>
        {/*<Route path="/:contactId" element={<ContactDetails /} /> */}
        {/*<Route path="/create" element={<CreateContact />} />*/}
      </Routes>
    </div>
  );
}

export default App;

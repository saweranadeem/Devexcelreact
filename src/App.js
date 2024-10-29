import Counter from "./components/Counter";
import "bootstrap/dist/css/bootstrap.min.css";
import BasicExample from "./components/Navbar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UserObj from "./components/Userobj";  //function name and path of file

function App() {
  return (
    <div>
      <BasicExample />
      <Counter />
      <ToastContainer />
      <UserObj />
    </div>
  );
}

export default App;

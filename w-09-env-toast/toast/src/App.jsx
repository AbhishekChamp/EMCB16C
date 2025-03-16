import { ToastContainer, toast } from "react-toastify";
import "./App.css";

function App() {
    const notify = () => toast("Notify !");
    const success = () => toast.success("Success !", { theme: "dark" });
    return (
        <>
            <h1>Toast Example Application</h1>
            <button onClick={notify}>Notify</button>
            <button onClick={success}>Success</button>
            <ToastContainer position='top-center' />
        </>
    );
}

export default App;

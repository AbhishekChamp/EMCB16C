import "./App.css";

function App() {
    const appName = import.meta.env.VITE_APPLICATION_NAME;
    const date = import.meta.env.VITE_DATE;
    return (
        <>
            <h1>{appName}</h1>
            <p>{date}</p>
        </>
    );
}

export default App;

import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";

function App() {
  return (
    <>
      <Header />

      <div className="h-full">
        <Sidebar />
      </div>
    </>
  );
}

export default App;

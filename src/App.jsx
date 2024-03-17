import { Banner } from "./components/Banner/Banner";
import { Segment } from "./components/Segment/Segment";
import { Sidebar } from "./components/Sidebar/Sidebar";

function App() {
  return (
    <>
      <Banner />
      <div className="flex">
        <Sidebar />
        <Segment />
      </div>
    </>
  );
}

export default App;

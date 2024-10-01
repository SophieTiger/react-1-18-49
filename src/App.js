import "./App.css";
import ConditionalRenderingClass from "./components/ConditionalRenderingClass";
import ConditionalRenderingFunctional from "./components/ConditionalRenderingFunctional";
import EventsClass from "./components/EventsClass";
import EventsFunctional from "./components/EventsFunctional";
import NestingComponents from "./components/NestingComponents";

function App() {
  return <div className="App">
    {/* <EventsFunctional /> */}
    {/* <EventsClass /> */}
    {/* <ConditionalRenderingClass /> */}
    {/* <ConditionalRenderingFunctional connected={true} /> */}
    <NestingComponents />
  </div>;
}

export default App;

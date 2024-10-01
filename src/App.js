import "./App.css";
import ConditionalRenderingClass from "./components/ConditionalRenderingClass";
import ConditionalRenderingFunctional from "./components/ConditionalRenderingFunctional";
import EventsClass from "./components/EventsClass";
import EventsFunctional from "./components/EventsFunctional";
import MethodsAsPropsChild from "./components/MethodsAsPropsChild";
import MethodsAsPropsParent from "./components/MethodsAsPropsParent";
import NestingComponents from "./components/NestingComponents";

function App() {
  return <div className="App">
    {/* <EventsFunctional /> */}
    {/* <EventsClass /> */}
    {/* <ConditionalRenderingClass /> */}
    {/* <ConditionalRenderingFunctional connected={true} /> */}
    {/* <NestingComponents /> */}
    {/* <MethodsAsPropsChild /> */}
    <MethodsAsPropsParent />
  </div>;
}

export default App;

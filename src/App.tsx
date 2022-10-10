import Intro from "./components/Intro";
import Who_are_we from "./components/who_are_we";
import Luxury_apartments from "./components/luxury_apartments";
import Customers_stories from "./components/customers_stories";

function App() {
  return (
    <div className="w-full h-full">
      <Intro />
      <Who_are_we />
      <Luxury_apartments />
      <Customers_stories />
    </div>
  );
}

export default App;

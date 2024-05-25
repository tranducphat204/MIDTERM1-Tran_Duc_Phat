import { Item } from "./components/Item";
import data from "./data";
function App() {
  return (
    <>
      {data.map((user, index) => {
        <Item key={index} />;
        props = { user };
      })}
    </>
  );
}

export default App;

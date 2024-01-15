import Input from "./components/Input";
import Button from "./components/Button";

function App() {
  return <main>
    <Input label="Simple" id="simple" type="text"/>
    <Button el='button'>Whatever</Button>
    <Button el='anchor'>A link i presume</Button>
  </main>
}

export default App;

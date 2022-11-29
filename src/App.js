import ComponentTree from './components/ComponentTree';
import Section from './components/Section';
import data from './data.json'
import { addStyle } from './utils/addStyle';
import generateStyle from './utils/styleGenerator';

function App() {
  addStyle(generateStyle(data).join("").toString())
  return (
    <>
      <ComponentTree tree={data} />
    </>
  );
}

export default App;

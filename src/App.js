import Section from './components/Section';
import data from './data.json'

function App() {
  return (
    <>
      {
        data.map(data => {
         return <Section data={data} key={data.id} />
        })
      }
    </>
  );
}

export default App;

import List from './List_optimized.js'

function App() {
  const items = [
    {
      text: 'studying'
    }, 
    {
      text: 'laundry'
    }, 
    {
      text: 'cooking'
    }, 
    {
      text: 'laundry'
    },
  ]
  return (
    <List items={items} />
  );
}

export default App;

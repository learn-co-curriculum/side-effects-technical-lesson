
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


// Replace this with your own API endpoint or leave it as an empty string
const API_URL = "https://jsonplaceholder.typicode.com/users/1";

function App() {
  // State for userName


  // State for userData fetched from an API

  // 1. TODO: useEffect to update document title based on userName
  //    - This effect should run whenever 'userName' changes.


  // 2. TODO: useEffect to fetch data from API_URL on component mount
  //    - This effect should only run once when the component first renders.


  // 3. TODO: useEffect to set up a window event listener (e.g., for clicks)
  //    - Return a cleanup function to remove the event listener on unmount.
  return (<div>
    <p> app is running!</p>
  </div>
  );

}

export default App;

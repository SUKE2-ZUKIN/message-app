import './App.css';
import SignIn from './components/SignIn';
import Line from "./components/Line";
import { auth } from './firebase.js';
import { useAuthState } from "react-firebase-hooks/auth";

function App() {
  const [user] = useAuthState(auth);

  return (
    <div>
      { user ? <Line /> : <SignIn /> }
    </div>
  );
}

export default App;

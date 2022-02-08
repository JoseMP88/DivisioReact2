import "./styles.css";
import Divisio from "./Divisio";
export default function App() {
  /* let n1 = "3";
  let n2 = "0";*/
  return (
    <div className="App">
      <p>Resultat:</p>
      <Divisio numDiv1={3} numDiv2={1} />
    </div>
  );
}

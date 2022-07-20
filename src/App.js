import { GameCard } from "./components";
import "./styles.css";

export default function App() {
  return (
    <div>
      <div className="container">
        <h1>
          You Can't Be Serious{" "}
          <span role="img" aria-label="head smack emoji">
            🤦‍♀️
          </span>
        </h1>
        <h2> Guess Which US Anti-Woman Laws Really Exist</h2>
        <GameCard />
      </div>
    </div>
  );
}

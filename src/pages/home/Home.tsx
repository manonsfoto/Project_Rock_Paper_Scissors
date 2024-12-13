import { useState } from "react";
import GameInput from "../../components/gameInput/GameInput";
import RestartBtn from "../../components/restartBtn/RestartBtn";
import Result from "../../components/result/Result";
import "./Home.css";
import { TInput } from "../../interfaces/TInput";

const Home = () => {
  const [inputYou, setInputYou] = useState<TInput | "">("");
  const [inputCPU, setInputCPU] = useState<TInput | "">("");
  const [result, setResult] = useState<string>("");

  return (
    <>
      <header>
        <h1>Rock Paper Scissors</h1>
        <h3>Choose your weapon</h3>
      </header>
      <main>
        <Result
          inputCPU={inputCPU}
          inputYou={inputYou}
          result={result}
          setResult={setResult}
        />
        <GameInput
          setInputYou={setInputYou}
          setInputCPU={setInputCPU}
          inputYou={inputYou}
        />
        <RestartBtn />
      </main>
    </>
  );
};

export default Home;

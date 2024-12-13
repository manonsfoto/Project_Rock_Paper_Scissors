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
      <header className="flex">
        <h1>Rock Paper Scissors</h1>
      </header>
      <main className="flex">
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

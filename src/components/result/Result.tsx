import { useEffect, useState } from "react";
import { TInput } from "../../interfaces/TInput";
import "./Result.css";
import paper from "../../../public/img/paper.png";
import rock from "../../../public/img/rock.png";
import scissors from "../../../public/img/scissors.png";

interface Props {
  inputYou: "" | TInput;
  inputCPU: "" | TInput;
  result: string;
  setResult: React.Dispatch<React.SetStateAction<string>>;
}

const Result: React.FC<Props> = ({ inputYou, inputCPU, result, setResult }) => {
  const [youWinCounter, SetYouWinCounter] = useState<number>(0);
  const [CPUWinCounter, SetCPUWinCounter] = useState<number>(0);

  useEffect(() => {
    const getResult = () => {
      switch (true) {
        // ------- you -> rock ---------------------------
        case inputYou === 0 && inputCPU === 0:
          return `It was a draw! You both chose Rock.`;

        case inputYou === 0 && inputCPU === 1:
          SetCPUWinCounter(CPUWinCounter + 1);
          return `Paper beats Rock. You lose!`;

        case inputYou === 0 && inputCPU === 2:
          SetYouWinCounter(youWinCounter + 1);
          return `Rock beats Scissors. You win!`;

        // ------- you -> paper ---------------------------
        case inputYou === 1 && inputCPU === 0:
          SetYouWinCounter(youWinCounter + 1);
          return `Paper beats Rock. You win!`;

        case inputYou === 1 && inputCPU === 1:
          return `It was a draw! You both chose Paper.`;

        case inputYou === 1 && inputCPU === 2:
          SetCPUWinCounter(CPUWinCounter + 1);
          return `Scissors beat Paper. You lose!`;

        // --------you -> scissors ---------------------------
        case inputYou === 2 && inputCPU === 0:
          SetCPUWinCounter(CPUWinCounter + 1);
          return `Rock beats Scissors. You lose!`;

        case inputYou === 2 && inputCPU === 1:
          SetYouWinCounter(youWinCounter + 1);
          return `Scissors beat Paper. You win!`;

        case inputYou === 2 && inputCPU === 2:
          return `It was a draw! You both chose Scissors.`;
      }
    };
    const newResult: string | undefined = getResult();
    setResult(() => (newResult ? newResult : ""));
  }, [inputYou, inputCPU, setResult]);

  const displayImg = (whichInput: "" | TInput) => {
    switch (whichInput) {
      case 0:
        return <img src={rock} alt="Rock" />;
      case 1:
        return <img src={paper} alt="Paper" />;
      case 2:
        return <img src={scissors} alt="Scissors" />;
    }
  };

  return (
    <div className="output flex">
      <article className="CPU flex">
        {/* <p>CPU choose: {inputCPU !== "" ? TInput[Number(inputCPU)] : ""}</p> */}
        {displayImg(inputCPU)}
      </article>
      <div className="score-board flex">
        <div className="flex score-box">
          <p>CPU</p>
          <p className="score">{CPUWinCounter}</p>
        </div>
        <div>
          <p>{result}</p>
        </div>
        <div className="flex score-box">
          <p>YOU</p>
          <p className="score">{youWinCounter}</p>
        </div>
      </div>
      <article className="You flex">
        {/* <p>You choose: {inputYou !== "" ? TInput[Number(inputYou)] : ""} </p> */}
        {displayImg(inputYou)}
      </article>
    </div>
  );
};

export default Result;

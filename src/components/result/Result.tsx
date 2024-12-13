import { useEffect } from "react";
import { TInput } from "../../interfaces/TInput";
import "./Result.css";

interface Props {
  inputYou: "" | TInput;
  inputCPU: "" | TInput;
  result: string;
  setResult: React.Dispatch<React.SetStateAction<string>>;
}

const Result: React.FC<Props> = ({ inputYou, inputCPU, result, setResult }) => {
  useEffect(() => {
    const getResult = () => {
      switch (true) {
        // ------- you -> rock ---------------------------
        case inputYou === 0 && inputCPU === 0:
          return `It was a draw! You both chose Rock`;

        case inputYou === 0 && inputCPU === 1:
          return `Paper beats Rock. You lose!`;

        case inputYou === 0 && inputCPU === 2:
          return `Rock beats Scissors. You win!`;

        // ------- you -> paper ---------------------------
        case inputYou === 1 && inputCPU === 0:
          return `Paper beats Rock. You win!`;

        case inputYou === 1 && inputCPU === 1:
          return `It was a draw! You both chose Paper`;

        case inputYou === 1 && inputCPU === 2:
          return `Scissors beat Paper. You lose!`;

        // --------you -> scissors ---------------------------
        case inputYou === 2 && inputCPU === 0:
          return `Rock beats Scissors. You lose!`;

        case inputYou === 2 && inputCPU === 1:
          return `Scissors beat Paper. You win!`;

        case inputYou === 2 && inputCPU === 2:
          return `It was a draw! You both chose Scissors`;
      }
    };
    const newResult: string | undefined = getResult();
    setResult(() => (newResult ? newResult : ""));
  }, [inputYou, inputCPU, setResult]);

  return (
    <div>
      <p>You choose: {inputYou !== "" ? TInput[Number(inputYou)] : ""} </p>
      <p>CPU choose: {inputCPU !== "" ? TInput[Number(inputCPU)] : ""}</p>
      <p>Result: {result}</p>
    </div>
  );
};

export default Result;

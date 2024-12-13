import { TInput } from "../../interfaces/TInput";
import "./GameInput.css";

interface Props {
  setInputYou: React.Dispatch<React.SetStateAction<"" | TInput>>;
  setInputCPU: React.Dispatch<React.SetStateAction<"" | TInput>>;
  inputYou: "" | TInput;
}

const GameInput: React.FC<Props> = ({ setInputYou, setInputCPU, inputYou }) => {
  const getRandomNum = (): number => {
    return Math.floor(Math.random() * 3);
  };

  const getInputCPU = () => {
    const newEnumKey: number = getRandomNum();
    setInputCPU(newEnumKey);
  };

  return (
    <div>
      <button
        type="button"
        value={inputYou}
        onClick={() => {
          setInputYou(TInput.rock);
          getInputCPU();
        }}
      >
        ✊
      </button>
      <button
        value={inputYou}
        onClick={() => {
          setInputYou(TInput.paper);
          getInputCPU();
        }}
        type="button"
      >
        ✋
      </button>
      <button
        value={inputYou}
        onClick={() => {
          setInputYou(TInput.scissors);
          getInputCPU();
        }}
        type="button"
      >
        ✌️
      </button>
    </div>
  );
};

export default GameInput;

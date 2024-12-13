import "./RestartBtn.css";

const RestartBtn = () => {
  return (
    <>
      <button type="button" onClick={() => location.reload()}>
        restart game
      </button>
    </>
  );
};

export default RestartBtn;

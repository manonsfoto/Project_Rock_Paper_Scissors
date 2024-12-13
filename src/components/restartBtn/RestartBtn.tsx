import "./RestartBtn.css";

const RestartBtn = () => {
  return (
    <>
      <button
        className="btn-restart"
        type="button"
        onClick={() => location.reload()}
      >
        restart game
      </button>
    </>
  );
};

export default RestartBtn;

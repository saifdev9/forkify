function Spinner() {
  return (
    <>
      <div className="spinner">
        <svg>
          <use href="icons.svg#icon-loader" />
        </svg>
      </div>

      <p className="para-spinner">LOADING DATA...</p>
    </>
  );
}

export default Spinner;

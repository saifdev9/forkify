function Spinner() {
  return (
    <div className="spinner">
      <svg>
        <use href="icons.svg#icon-loader" />
      </svg>
      <p>LOADING DATA...</p>
    </div>
  );
}

export default Spinner;

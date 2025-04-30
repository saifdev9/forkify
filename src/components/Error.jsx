function Error() {
  return (
    <div className="error">
      <div>
        <svg>
          <use href="icons.svg#icon-alert-triangle" />
        </svg>
      </div>
      <p>No recipes found for your query. Please try again!</p>
    </div>
  );
}

export default Error;

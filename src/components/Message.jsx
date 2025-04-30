function Message({ svgName, msg }) {
  return (
    <div className="message">
      <div>
        <svg>
          <use href={`icons.svg#icon-${svgName}`} />
        </svg>
      </div>
      <p>{msg}</p>
    </div>
  );
}

export default Message;

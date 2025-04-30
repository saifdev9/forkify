function Svg({ className, name }) {
  return (
    <svg className={className}>
      <use href={`icons.svg#icon-${name}`} />
    </svg>
  );
}

export default Svg;

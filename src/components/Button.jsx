import Svg from "./Svg";

function Button({
  children,
  isLoading,
  svgName,
  className,
  onClick,
  svgClassName,
}) {
  return (
    <button className={className} disabled={isLoading} onClick={onClick}>
      {isLoading ? (
        "Loading..."
      ) : (
        <>
          {svgName && <Svg className={svgClassName} name={svgName} />}
          <span>{children}</span>
        </>
      )}
    </button>
  );
}

export default Button;

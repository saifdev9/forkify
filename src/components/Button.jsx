import Svg from "./Svg";

function Button({
  children,
  isLoading,
  svgName,
  className,
  onClick,
  svgClassName,
  end,
}) {
  return (
    <button className={className} disabled={isLoading} onClick={onClick}>
      {isLoading ? (
        "Loading..."
      ) : (
        <>
          {!end && svgName && <Svg className={svgClassName} name={svgName} />}
          <span>{children}</span>
          {end && svgName && <Svg className={svgClassName} name={svgName} />}
        </>
      )}
    </button>
  );
}

export default Button;

import "./style.css";

export const RegisterBtn = (props) => {
  const { children, className, type } = props;
  return (
    <button className={className} type={type}>
      {children}
    </button>
  );
};
export const LogInBtn = (props) => {
  const { children, className, handleClick, type } = props;
  return (
    <button className={className} type={type} onClick={handleClick}>
      {children}
    </button>
  );
};

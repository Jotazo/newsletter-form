import "./Button.css";

const Button = ({ text, className, ...props }) => {
  return (
    <button className={`btn ${className}`} {...props}>
      {text}
    </button>
  );
};

export default Button;

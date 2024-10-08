const Button = (props) => {
  return (
    <button
      className={`border border-primary-floral-white rounded py-1 lg:py-[10px] px-2 lg:px-5 hover:bg-primary-floral-white hover:text-neutral-night transition duration-150 ease-in ${props.margin}`}
    >
      {props.text}
    </button>
  );
};

export default Button;

const Button = (props) => {
  return (
    <button
      className={`font-merriweather md:font-karla text-body-m lg:text-display-xs  text-${props.color} bg-${props.background} border border-primary-flame rounded-md px-5 lg:px-8 py-1 hover:text-neutral-night hover:bg-primary-floral-white hover:border-primary-floral-white`}
    >
      {props.text}
    </button>
  );
};

export default Button;

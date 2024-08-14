const Button = ({ text, fill }) => {
  let btnStyles =
    'font-merriweather lg:font-karla text-body-m lg:text-display-xs rounded-md px-5 lg:px-8 py-1 hover:text-neutral-night hover:bg-primary-floral-white';

  if (fill) {
    btnStyles += ' bg-primary-flame text-neutral-night mr-2';
  } else {
    btnStyles +=
      ' border border-primary-flame text-primary-flame hover:border-primary-floral-white ml-2';
  }
  return <button className={btnStyles}>{text}</button>;
};

export default Button;

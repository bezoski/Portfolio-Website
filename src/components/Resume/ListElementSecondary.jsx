import { GoDotFill } from 'react-icons/go';

const ListElementSecondary = ({ title, description, width }) => {
  return (
    <div className="flex font-merriweather text-body-m text-primary-floral-white">
      <div className={`w-[${width}px] flex-shrink-0`}>
        <p>{title}</p>
      </div>
      <span className="mx-2">
        <GoDotFill />
      </span>
      <div className="flex flex-col">
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ListElementSecondary;

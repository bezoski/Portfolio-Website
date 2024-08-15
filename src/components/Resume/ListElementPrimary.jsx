const ListElementPrimary = ({ icon, text }) => {
  let boxShadow = 'shadow-inner-custom shadow-drop-custom';
  return (
    <div className="flex flex-row space-x-4 mt-2">
      <div
        className={`w-[30px] h-[30px] lg:w-[40px] lg:h-[40px] bg-secondary-gunmetal flex items-center justify-center ${boxShadow}`}
      >
        <img
          src={icon}
          alt={text}
          className="w-[20px] h-[20px] lg:w-[30px] lg:h-[30px]"
        />
      </div>
      <div className="flex flex-col flex-grow">
        <p className="font-merriweather text-body-m text-primary-floral-white mt-1">
          {text}
        </p>
        <div className="w-full h-[4px] bg-primary-floral-white rounded-sm mt-auto" />
      </div>
    </div>
  );
};

export default ListElementPrimary;

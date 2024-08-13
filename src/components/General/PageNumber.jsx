const PageNumber = ({ number }) => {
  return (
    <div className="flex items-center">
      <div className="w-[70px] h-[5px] bg-primary-floral-white rounded-l-[3px]" />
      <p className="font-merriweather text-display-s text-primary-floral-white px-1">
        0{number}
      </p>
      <div className="w-[70px] h-[5px] bg-primary-floral-white rounded-r-[3px]" />
    </div>
  );
};

export default PageNumber;

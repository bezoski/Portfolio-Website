const Form = () => {
  return (
    <div className="flex flex-col w-full items-center md:items-stretch border">
      <div className="flex flex-col md:flex-row items-center w-full md:space-x-4">
        <div className="w-[90%] md:w-1/2 border">name</div>
        <div className="w-[90%] md:w-1/2 border">email</div>
      </div>
      <div className="w-[90%] md:w-full border">subject</div>
      <div className="w-[90%] md:w-full border">message</div>
      <div className="border w-1/5">button</div>
    </div>
  );
};

export default Form;

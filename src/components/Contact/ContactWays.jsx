const ContactWays = ({ icon, title, text }) => {
  return (
    <div className="flex flex-row space-x-2">
      <div className="w-[50px] h-[50px] bg-primary-flame rounded-lg flex items-center justify-center">
        <i className="text-3xl">{icon}</i>
      </div>
      <div className="flex flex-col font-merriweather text-body-s md:text-body-m">
        <h1 className="text-secondary-battleship-gray">{title}</h1>
        <p className="text-primary-floral-white">{text}</p>
      </div>
    </div>
  );
};

export default ContactWays;

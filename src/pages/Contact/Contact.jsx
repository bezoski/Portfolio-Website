import PageNumber from '../../components/General/PageNumber';

const Contact = () => {
  return (
    <div className="relative flex flex-col h-full md:mx-16 lg:mx-[10%] border border-red-300">
      Contact
      <div className="absolute bottom-0 left-0 w-full flex justify-center md:justify-start ">
        <PageNumber number="5" />
      </div>
    </div>
  );
};

export default Contact;

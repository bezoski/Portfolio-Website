import ContactWays from '../../components/Contact/ContactWays';
import Description from '../../components/Contact/Description';
import PageNumber from '../../components/General/PageNumber';

import { MdEmail } from 'react-icons/md';
import { FaDiscord } from 'react-icons/fa';
import SocialIcons from '../../components/Contact/SocialIcons';
import Form from '../../components/General/Form';

const Contact = () => {
  return (
    <div className="relative flex flex-col h-full md:mx-16 lg:mx-[13%]">
      <h1 className="text-karla text-display-s md:text-display-m lg:text-display-xl text-primary-floral-white uppercase text-center ">
        Get in <span className="text-primary-flame">Touch</span>
      </h1>
      <div className="flex flex-col justify-center md:justify-between md:flex-row">
        <div className="flex flex-col items-center md:items-start md:w-2/5 p-2">
          <Description />
          <div className="mt-1 md:mt-4 space-y-2 ">
            <ContactWays
              icon={<MdEmail />}
              title="Mail me"
              text="bezoski045@gmail.com"
            />
            <ContactWays
              icon={<FaDiscord />}
              title="Write on Discord"
              text="bezoski"
            />
          </div>
          <div className="mt-2 md:mt-7">
            <SocialIcons />
          </div>
        </div>
        <div className="flex flex-col items-center md:items-start md:w-3/5 mt-4 md:mt-0 border p-2">
          <Form />
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full flex justify-center md:justify-start ">
        <PageNumber number="5" />
      </div>
    </div>
  );
};

export default Contact;

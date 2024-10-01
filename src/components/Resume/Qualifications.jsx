import TitleHeader from './TitleHeader';
import ListElementSecondary from './ListElementSecondary';

const Qualifications = () => {
  return (
    <div className="w-full md:w-[90%] mt-[15px] md:mt-0">
      <TitleHeader title="Professional qualifications" />
      <ListElementSecondary
        title="INF.03"
        description="Creating and administering websites, internet applications and databases"
        width={60}
      />
      <ListElementSecondary
        title="INF.04"
        description="Design, programming and testing of applications"
        width={60}
      />
    </div>
  );
};

export default Qualifications;

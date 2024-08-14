import toolsApplication from '../../assets/Data/toolsApplication';
import TitleHeader from './TitleHeader';
import ListElement from './ListElement';

const ToolsApplication = () => {
  return (
    <div className="w-full md:w-[90%] mt-[15px] lg:mt-5">
      <TitleHeader title="Tools Application" />
      {toolsApplication.map((tools) => (
        <div key={tools.id}>
          <ListElement icon={tools.icon} text={tools.toolName} />
        </div>
      ))}
    </div>
  );
};

export default ToolsApplication;

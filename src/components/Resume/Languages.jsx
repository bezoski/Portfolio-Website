import TitleHeader from './TitleHeader';

const Languages = () => {
  return (
    <div className="w-full mt-2">
      <TitleHeader title="Languages" />
      <div className="flex flex-col">
        <div className="flex flex-row">
          <div className="w-1/3">l</div>
          <div className="w-1/3">s</div>
          <div className="w-1/3">p</div>
        </div>
      </div>
    </div>
  );
};

export default Languages;

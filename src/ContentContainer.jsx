import { v4 as uuidv4 } from "uuid";

const ContentContainer = ({ data, activeId }) => {
  const toDisplay = data.find((d) => d.id === activeId);

  return (
    <div>
      <h2 className="text-4xl mb-2">{toDisplay?.title}</h2>
      <div className="badge badge-accent mb-8">{toDisplay?.company}</div>
      <p className="text-2xl mb-8">{toDisplay.dates}</p>

      {toDisplay?.duties.map((duty) => (
        <div className="flex justify-start gap-4" key={uuidv4()}>
          <span className="text-accent">&gt;&gt;</span>
          <p>{duty}</p>
        </div>
      ))}
    </div>
  );
};
export default ContentContainer;

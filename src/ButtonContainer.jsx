const ButtonContainer = ({ data, handleClick, activeId }) => {
  const options = data.filter((d) => d.company);

  return (
    <div className="flex flex-col space-y-16 border-r-4 border-primary pr-8">
      {options.map((option) => (
        <button
          key={option.id}
          className={`btn btn-primary ${
            option.id === activeId ? "btn-active" : "btn-outline"
          } `}
          onClick={() => handleClick(option.id)}
        >
          {option.company}
        </button>
      ))}
    </div>
  );
};
export default ButtonContainer;

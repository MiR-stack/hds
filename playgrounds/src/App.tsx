import "./App.css";
import { Select } from "@hds/react/lib";

const App = () => {
  const handleOption = (option: object) => {
    console.log(option);
  };

  const options = [
    {
      label: "option 1",
      value: "option 1",
    },
    {
      label: "option 2",
      value: "option 2",
    },
    {
      label: "option 3",
      value: "option 3",
    },
    {
      label: "option 4",
      value: "option 4",
    },
  ];

  return (
    <div>
      <p>this is habib design system</p>

      <Select
        optionClick={handleOption}
        options={options}
        labels={["Label1", "Label2"]}
        helperText="this is helper text"
        variant="primary"
      />
    </div>
  );
};

export default App;

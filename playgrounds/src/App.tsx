import "./App.css";
import { Button } from "@hds/react/lib";
import { IoSendSharp } from "react-icons/io5";

const App = () => {
  return (
    <div>
      <p>this is habib design system</p>
      <Button
        title="click here"
        onClick={() => alert("helow world")}
        startIcon={<IoSendSharp />}
      >
        {" "}
        my button
      </Button>
    </div>
  );
};

export default App;

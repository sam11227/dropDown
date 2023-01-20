import React, { useState } from "react";
import Dropdown from "./drop";
import Convert from "./Convert";

const options = [
  {
    label: "Afrikaans",
    value: "af",
  },
  {
    label: "Arabic",
    value: "ar",
  },
  {
    label: "Hindi",
    value: "hi",
  },
  {
    label: "dutch",
    value: "nl",
  }
];

const Translate = () => {
  // const Dropdata = React.createContext();
  const [language, setLanguage] = useState(options[0]);
  const [text, setText] = useState(" ");
  return (
    <div>
      {/* <Dropdata.Provider value={options}> */}
      <div className="ui form">
        <div className="field">
          <label>Enter Text</label>
          <input value={text} onChange={(e) => setText(e.target.value)} />
        </div>
      </div>
      <Dropdown
        label="Select a Language"
        selected={language}
        onSelectedChange={setLanguage}
        options={options}
      />
      {/* </Dropdata.Provider> */}
      <hr/>
      <h3 className="ui header">Output</h3>
      <Convert text={text}  language={language}/>
    </div>
  );
};
export default Translate;

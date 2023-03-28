import { ChangeEvent, useState } from "react";

const SelectLanguange = () => {
  const [langSelected, setLangSelected] = useState("id");

  const changeLanguage = (e: ChangeEvent<HTMLInputElement>) => setLangSelected(e.target.value);

  return (
    <div className="language">
      <label className="language__item">
        <input
          type="radio"
          name="language"
          value="eng"
          checked={langSelected === "eng"}
          onChange={changeLanguage}
        />
        <span>ENG</span>
      </label>
      <label className="language__item">
        <input
          type="radio"
          name="language"
          value="id"
          checked={langSelected === "id"}
          onChange={changeLanguage}
        />
        <span>ID</span>
      </label>
    </div>
  );
};

export default SelectLanguange;

import React, { useContext, useState, useEffect } from "react";
import { LocaleContext } from "./LocaleContext";
import { ThemeContext } from "./ThemeProvider";
import Row from "./Row";
import Input from "./Input";

import "./homeStyles.scss";

export default function App() {
  const locale = useContext(LocaleContext);
  const theme = useContext(ThemeContext);
  // const [name, setName] = useState("Sachin");
  // const [surname, setSurname] = useState("Tendulkar");
  const name = useFormInput("Sachin");
  const surname = useFormInput("Tendulkar");
  const width = useWindowWidth();
  useTitle(name.value + " " + surname.value);

  // const handleNameChange = e => setName(e.target.value);
  // const handleSurnameChange = e => setSurname(e.target.value);

  // useEffect(() => {
  //   document.title = name + " " + surname;
  // });

  // const [width, setWidth] = useState(window.innerWidth);
  // useEffect(() => {
  //   const handleResize = () => setWidth(window.innerWidth);
  //   window.addEventListener("resize", handleResize);
  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // });
  return (
    <section className={theme}>
      <Row label="Name">
        <Input {...name} />
      </Row>
      <Row label="Surname">
        <Input {...surname} />
      </Row>
      <Row label="Locale">{locale}</Row>
      <Row label="Screen Width">{width}</Row>
    </section>
  );
}

// Custom hook
const useWindowWidth = () => {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });
  return width;
};

const useTitle = title => {
  useEffect(() => {
    document.title = title;
  }, [title]);
};

const useFormInput = initialValue => {
  const [value, setValue] = useState(initialValue);
  const onChange = e => setValue(e.target.value);
  return {
    value,
    onChange
  };
};

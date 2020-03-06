import React, { useState, ChangeEvent } from "react";

import Header from "../header";
import Footer from "../footer";
import Input from "../input";
import Recent from "../recent";
import List from "../list";
import Container from "./styled";
import { SearchString, SearchHistory } from "../../interfaces";
import updateHistory from "./utils/updateHistory";

const App = () => {
  const [searchString, setSearchString] = useState("");
  const [searchHistory, setHistory] = useState([] as SearchHistory);

  const handleHistory = () => {
    const updatedHistory = updateHistory(searchString, [...searchHistory]);
    setHistory(updatedHistory);
  };
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchString(event.currentTarget.value);
  };
  const setInputValue = (value: SearchString) => {
    setSearchString(value);
  };
  const clearInput = () => {
    setSearchString("");
  };
  return (
    <Container>
      <Header />
      <Input value={searchString} onChange={onChange} clearInput={clearInput} />
      <Recent
        searchHistory={searchHistory}
        getSearchStringFromHistory={setInputValue}
      />
      <List searchString={searchString} updateHistory={handleHistory} />
      <Footer />
    </Container>
  );
};

export default App;

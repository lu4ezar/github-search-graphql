import React from "react";

import Header from "../header";
import Footer from "../footer";
import Input from "../input";
import Recent from "../recent";
import List from "../list";
import Container from "./styled";

const HISTORY_MAX_SIZE = 10;

const App = () => {
  const [searchString, setSearchString] = React.useState("");
  const [searchHistory, setHistory] = React.useState<string[]>([]);

  const updateHistory = (newSearch: string) => {
    if (!searchHistory.includes(newSearch)) {
      const newLength = searchHistory.unshift(newSearch);
      if (newLength > HISTORY_MAX_SIZE) {
        searchHistory.pop();
      }
      setHistory([...searchHistory]);
    }
  };
  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchString(event.currentTarget.value);
  };
  const setInputValue = (value: string) => {
    setSearchString(value);
  };
  const clearInput = (): void => {
    setSearchString("");
  };
  return (
    <Container>
      <Header />
      <Input
        value={searchString}
        handleInput={handleInput}
        clearInput={clearInput}
      />
      <Recent
        searchHistory={searchHistory}
        getSearchStringFromHistory={setInputValue}
      />
      <List searchString={searchString} updateHistory={updateHistory} />
      <Footer />
    </Container>
  );
};

export default App;

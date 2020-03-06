import updateHistory, { HISTORY_MAX_SIZE } from "./updateHistory";

const word = "styled";

describe("updateHistory function", () => {
  it("adds new word at the beginning of history array", () => {
    const history = ["first", "last"];
    const updatedHistory = updateHistory(word, history);
    expect(updatedHistory[0]).toBe("styled");
  });

  it("does not add word if it's already in the list", () => {
    const history = ["styled", "guthub"];
    const updatedHistory = updateHistory(word, history);
    expect(updatedHistory.length).toEqual(history.length);
  });

  it("does not let history to exceed it's maximum size", () => {
    const history = Array(HISTORY_MAX_SIZE).fill("history");
    const updatedHistory = updateHistory(word, history);
    expect(updatedHistory.length).toEqual(HISTORY_MAX_SIZE);
  });

  it("removes last element if history already has it's maximum size", () => {
    const history = Array(HISTORY_MAX_SIZE).fill("history");
    history.fill("first", HISTORY_MAX_SIZE - 1);
    const updatedHistory = updateHistory(word, history);
    expect(updatedHistory[0]).toBe(word);
    expect(updatedHistory.includes("first")).toBe(false);
  });
});

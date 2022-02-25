import { renderHook, act } from "@testing-library/react-hooks";
import useCalculatorView from "../../hooks/useCalculatorView";

test("show result", () => {
  const { result } = renderHook(() => useCalculatorView());
  const { addResult } = result.current;
  act(() => addResult("new result"));
  const { result: resultText } = result.current;
  expect(resultText).toEqual("new result");
});

// test("soustraction de deux éléments", () => {
//   const{ result } = renderHook(() => useCalculatorView());
//   const { addResult } = result.current;
//   console.log(addResult.substraction)
//   act(() => addResult.substraction("1", "1"));
//   const { result: resultNum} = result.current;
//   console.log(resultNum);
//   expect(resultNum).toEqual(0);
// })  

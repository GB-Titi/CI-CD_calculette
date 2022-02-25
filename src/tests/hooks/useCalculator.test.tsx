import { renderHook, act } from "@testing-library/react-hooks";
import useCalculator from "../../hooks/useCalculator";

// test("show result", () => {
//   const { result } = renderHook(() => useCalculatorView());
//   const { addResult } = result.current;
//   act(() => addResult("new result"));
//   const { result: resultText } = result.current;
//   expect(resultText).toEqual("new result");
// });

test("soustraction de deux éléments", () => {
    const { result } = renderHook(() => useCalculator());
    const { substraction } = result.current;
    const value1 = "1";
    const value2 = "1";
    const resultText  = substraction(value1, value2);
    expect(resultText).toEqual("0");
}); 

test("Division de deux éléments", () => {
    const { result } = renderHook(() => useCalculator());
    const { division } = result.current;
    const value1 = "6";
    const value2 = "2";
    const resultText  = division(value1, value2);
    expect(resultText).toEqual("3");
}); 


test("multiplication de deux éléments", () => {
    const { result } = renderHook(() => useCalculator());
    const { multiplication } = result.current;
    const value1 = "6";
    const value2 = "2";
    const resultText  = multiplication(value1, value2);
    expect(resultText).toEqual("12");
}); 

test("Racine carré d'un élément", () => {
    const { result } = renderHook(() => useCalculator());
    const { square } = result.current;
    const value2 = "9";
    const resultText  = square(value2);
    expect(resultText).toEqual("3");
}); 


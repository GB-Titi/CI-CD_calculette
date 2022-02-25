import { renderHook } from "@testing-library/react-hooks";
import useJustForTest, { User } from "../../hooks/useJustForTest";

test("show multiple examples", () => {
  const { result } = renderHook(() => useJustForTest());
  const {
    testBoolTrue,
    testAssertEquals,
    testToBeInstanceOf,
    testToHaveReturned,
    testContainEqual,
    testToStrictEqual,
    testToBeLessThan,
    testToBeNull,
  } = result.current;

  const Equal = {delicious: true, sour: false};

  expect(testBoolTrue()).toBeTruthy();
  expect(testAssertEquals()).toEqual("same");
  expect(testToBeNull()).toBeNull();
  expect(testContainEqual()).toContainEqual(Equal);
  expect(testToStrictEqual()).toContainEqual(Equal);
  expect(testToBeLessThan()).toBeLessThan(1001);
  expect(1).not.toBeNaN();
  expect(testToBeInstanceOf()).toBeInstanceOf(User);
  const fnTest = jest.fn(testToHaveReturned);
  fnTest();
  expect(fnTest).toHaveReturnedWith(0);
});

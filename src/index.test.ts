import { useCBridge } from "./";
import { renderHook, } from "@testing-library/react-hooks";

// mock timer using jest
jest.useFakeTimers();

describe("useMyHook", () => {
  it("updates every second", () => {
    const { result } = renderHook(() => useCBridge());

    expect(result.current).not.toBeNull();

  });

});

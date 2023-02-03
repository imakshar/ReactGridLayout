import { render, screen } from "@testing-library/react";
import CustomTitleBox from "../components/CustomTitleBox/CustomTitleBox";

test("render custom title box", () => {
  render(<CustomTitleBox title="test" />);
  const customTitleBox = screen.getByTestId("customTitleBox");
  expect(customTitleBox).toBeInTheDocument();
});

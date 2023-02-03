import { render, screen } from "@testing-library/react";
import CustomSnackBar from "../components/CustomSnackBar/CustomSnackBar";

test("render custom snackbar", () => {
  render(
    <CustomSnackBar
      message="test"
      onClose={jest.fn()}
      open={false}
      position={{ horizontal: "center", vertical: "top" }}
      severity="error"
    />
  );
  const customSnackbar = screen.getByTestId("customSnackbar");
  expect(customSnackbar).toBeInTheDocument();
});

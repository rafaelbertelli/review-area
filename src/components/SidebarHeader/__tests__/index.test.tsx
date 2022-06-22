import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import SidebarHeader from "..";

describe("SidebarHeader", () => {
  it("should render correctly with logo", () => {
    render(<SidebarHeader />);
    expect(screen.getByRole("img")).toBeInTheDocument();
  });
});

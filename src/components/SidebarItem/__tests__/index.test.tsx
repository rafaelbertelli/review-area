import "@testing-library/jest-dom/extend-expect";
import { render, screen, waitFor } from "@testing-library/react";
import SidebarItem from "..";

describe("SidebarItem", () => {
  it("should render name", async () => {
    render(<SidebarItem name="Test" link="/test" active={false} />);

    const name = await waitFor(() => screen.getByText("Test"));
    expect(name).toBeInTheDocument();
  });

  it("should render link", async () => {
    render(<SidebarItem name="Test" link="/test" active={false} />);

    const link = (await waitFor(() => screen.getByText("Test"))).closest("a");
    expect(link).toHaveAttribute("href", "/test");
  });

  it("should render class inactive", async () => {
    render(<SidebarItem name="Test" link="/test" active={false} />);

    const name = await waitFor(() => screen.getByText("Test"));
    expect(name.closest("a")).toHaveClass(
      "flex flex-row items-center h-10 px-3 rounded-lg text-gray-300 hover:bg-gray-100 hover:text-gray-700"
    );
  });

  it("should render class active", async () => {
    render(<SidebarItem name="Test" link="/test" active={true} />);

    const name = await waitFor(() => screen.getByText("Test"));
    expect(name.closest("a")).toHaveClass(
      "flex flex-row items-center h-10 px-3 rounded-lg text-gray-700 bg-gray-100"
    );
  });
});

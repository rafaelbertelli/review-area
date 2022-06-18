import Link from "next/link";
import { SidebarItemProps } from "./types";

export default function SidebarItem({ name, link, active }: SidebarItemProps) {
  const applyClass = active
    ? "flex flex-row items-center h-10 px-3 rounded-lg text-gray-700 bg-gray-100"
    : "flex flex-row items-center h-10 px-3 rounded-lg text-gray-300 hover:bg-gray-100 hover:text-gray-700";

  return (
    <li className="my-px">
      <Link href={link}>
        <a className={applyClass}>
          <span className="ml-3">{name}</span>
        </a>
      </Link>
    </li>
  );
}

import { useEffect } from "react";

import { CategoryProps } from "../../@seedwork/domain/Category/type";
import appRoute from "../../@seedwork/routes/appRoutes";
import SidebarDivider from "../SidebarDivider";
import SidebarHeader from "../SidebarHeader";
import SidebarItem from "../SidebarItem";

import useCategories from "./useCategories";

export default function Sidebar() {
  const [categories, getCategories] = useCategories();

  useEffect(() => {
    const _getCategories = async () => await getCategories();
    _getCategories();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <aside className="sidebar w-64 md:shadow transform -translate-x-full md:translate-x-0 transition-transform duration-150 ease-in bg-indigo-500">
      <SidebarHeader />

      <div className="sidebar-content px-4 py-6">
        <ul className="flex flex-col w-full">
          <SidebarItem name="Dashboard" link="/dashboard" active={true} />

          <li className="my-px">
            <SidebarDivider topic="Categorias" />
          </li>

          {categories.map((category: CategoryProps) => {
            return (
              <SidebarItem
                key={category.id}
                name={category.name}
                link="#"
                // link={`/categories/${category.id}`} // ver como eh q cria o link pros produtos da categoria
                active={false}
              />
            );
          })}

          <li className="my-px">
            <SidebarDivider topic="Conta" />
          </li>

          <SidebarItem name="Sair" link={appRoute.LOGOUT} active={false} />
        </ul>
      </div>
    </aside>
  );
}

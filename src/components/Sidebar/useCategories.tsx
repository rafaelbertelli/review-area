import { useState } from "react";

import { api } from "../../@seedwork/apiClient/api";
import { CategoryProps } from "../../@seedwork/domain/Category/type";
import apiRoute from "../../@seedwork/routes/apiRoutes";

export default function useCategories(): [
  CategoryProps[],
  () => Promise<void>
] {
  const [categories, setCategories] = useState<CategoryProps[]>([]);

  const getCategories = async (): Promise<void> => {
    const result = await api.get(apiRoute.CATEGORIES);
    setCategories(result.data.categories);
  };

  return [categories, getCategories];
}

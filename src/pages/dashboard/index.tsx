import { GetServerSideProps } from "next";
import { parseCookies } from "nookies";
import { getAPIClient } from "../../@seedwork/apiClient/config/axios";
import DashboardComponent from "../../components/Dashboard";
import Sidebar from "../../components/Sidebar";
import apiRoute from "../../utils/apiRoutes";

type DashboardProps = {
  categories?: any;
};

export default function Dashboard({ categories }: DashboardProps) {
  return (
    <div className="flex flex-row min-h-screen bg-gray-100 text-gray-800">
      <Sidebar categories={categories} />
      <DashboardComponent />
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const COOKIE = process.env.NEXT_PUBLIC_COOKIE_NAME as string;
  const { [COOKIE]: token } = parseCookies(ctx);

  if (!token) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  const api = getAPIClient(ctx);
  const categories = await api.get(apiRoute.CATEGORIES);

  return {
    props: {
      categories: categories.data,
    },
  };
};

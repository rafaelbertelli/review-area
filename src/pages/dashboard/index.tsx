import { GetServerSideProps } from "next";
import { parseCookies } from "nookies";

import DashboardComponent from "../../components/Dashboard";
import Sidebar from "../../components/Sidebar";

export default function Dashboard() {
  return (
    <div className="flex flex-row min-h-screen bg-gray-100 text-gray-800">
      <Sidebar />
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

  return {
    props: {},
  };
};

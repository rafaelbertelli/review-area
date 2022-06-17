import { GetServerSideProps } from "next";
import { parseCookies } from "nookies";
import Login from "../../components/Login";

export default function Home() {
  return <Login />;
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const COOKIE = process.env.NEXT_PUBLIC_COOKIE_NAME as string;
  const { [COOKIE]: token } = parseCookies(ctx);

  if (!token) {
    return {
      props: {},
    };
  }

  return {
    props: {},
    redirect: {
      destination: "/dashboard",
      permanent: false,
    },
  };
};

import { useContext, useEffect } from "react";
import { AuthContext } from "../../contexts/AuthContext";

export default function Home() {
  const { signOut } = useContext(AuthContext);

  const delay = (amount = 1000) => {
    return new Promise((resolve) => setTimeout(resolve, amount));
  };

  useEffect(() => {
    delay(500).then(signOut);
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <h1 className="title-font text-3xl font-medium text-gray-900">
        Bye bye!
      </h1>
    </div>
  );
}

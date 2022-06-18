import Image from "next/image";
import Link from "next/link";

import appRoute from "../../@seedwork/routes/appRoutes";

export default function SidebarHeader() {
  return (
    <div className="sidebar-header flex items-center justify-center py-4">
      <div className="inline-flex">
        <Link href={appRoute.LOGIN}>
          <a>
            <span className="leading-10 text-gray-100 text-2xl font-bold ml-1 uppercase">
              <Image
                src="/images/logo.png"
                alt="logoe"
                width={134}
                height={34}
              />
            </span>
          </a>
        </Link>
      </div>
    </div>
  );
}

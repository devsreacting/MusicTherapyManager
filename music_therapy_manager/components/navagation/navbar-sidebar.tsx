import { Footer } from "flowbite-react";
import type { FC, PropsWithChildren } from "react";
import Navbar from "./navbar";
import Sidebar from "./sidebar";
import { MdFacebook } from "react-icons/md";
import { FaDribbble, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import { SidebarProvider, useSidebarContext } from "./SidebarContext";
import classNames from "classnames";

interface NavbarSidebarLayoutProps {
  isFooter?: boolean;
}

const NavbarSidebarLayout: FC<PropsWithChildren<NavbarSidebarLayoutProps>> =
  function ({ children, isFooter = true }) {
    return (
      <SidebarProvider>
        <Navbar />
        <div className="flex items-start pt-16">
          <Sidebar />
          <MainContent isFooter={isFooter}>{children}</MainContent>
        </div>
      </SidebarProvider>
    );
  };

const MainContent: FC<PropsWithChildren<NavbarSidebarLayoutProps>> = function ({
  children,
  isFooter,
}) {
  const { isOpenOnSmallScreens: isSidebarOpen } = useSidebarContext();

  return (
    <main
      className={classNames(
        "overflow-y-auto relative w-full h-full bg-gray-50 dark:bg-gray-900",
        isSidebarOpen ? "lg:ml-16" : "lg:ml-64"
      )}
    >
      {children}
      {isFooter && (
        <div className="mx-4 mt-4">
          <MainContentFooter />
        </div>
      )}
    </main>
  );
};

const MainContentFooter: FC = function () {
  return (
    <>
      <p className="my-8 text-center text-sm text-gray-500 dark:text-gray-300">
        &copy; 2023 DevsReacting
      </p>
    </>
  );
};

export default NavbarSidebarLayout;

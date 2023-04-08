import React from "react";
import FollowBar from "./Layout/FollowBar";
import Sidebar from "./Layout/Sidebar";

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className="h-screen bg-black">
      <div className="container h-full mx-auto xl:pl-30 max-w-6xl">
        <div className="grid grid-cols-4 h-full">
          <Sidebar />

          <div className="col-span-3 lg:col-span-2 border-x-[1px] border-neutral-800">
            {children}
          </div>

          <FollowBar />
        </div>
      </div>
    </div>
  );
};

export default Layout;

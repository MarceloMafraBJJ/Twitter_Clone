import React, { useCallback } from "react";
import { useRouter } from "next/router";
import { IconType } from "react-icons";
import { BsDot } from "react-icons/bs";

import useCurrentUser from "@/hooks/useCurrentUser";
import useLoginModal from "@/hooks/useLoginModal";

interface Props {
  href?: string;
  label: string;
  icon: IconType;
  onClick?: () => void;
  auth?: boolean;
  alert?: boolean;
}

const SideBarItem: React.FC<Props> = ({
  href,
  label,
  icon: Icon,
  onClick,
  auth,
  alert,
}) => {
  const router = useRouter();
  const { data: currentUser } = useCurrentUser();
  const loginModal = useLoginModal();

  const handleClick = useCallback(() => {
    if (onClick) {
      return onClick();
    }
    if (auth && !currentUser) {
      loginModal.onOpen();
    } else if (href) {
      router.push(href);
    }
  }, [router, onClick, href, auth, currentUser, loginModal]);

  return (
    <div onClick={handleClick} className="fkex flex-row items-center">
      {/* Mobile */}

      <div className="relative rounded-full h-14 w-14 p-4 flex items-center justify-center hover:bg-slate-300 hover:bg-opacity-10 cursor-pointer transition lg:hidden">
        <Icon size={28} color="white" />

        {alert ? (
          <BsDot className="text-sky-500 absolute -top-4 left-0" size={70} />
        ) : null}
      </div>

      {/* Large Screen */}

      <div className="relative hidden lg:flex flex-row gap-4 p-4 rounded-full hover:bg-slate-300 hover:bg-opacity-10 items-center cursor-pointer">
        <Icon size={24} color="white" />
        <p className="hidden lg:block text-white text-xl">{label}</p>
        {alert ? (
          <BsDot className="text-sky-500 absolute -top-4 left-0" size={70} />
        ) : null}
      </div>
    </div>
  );
};

export default SideBarItem;

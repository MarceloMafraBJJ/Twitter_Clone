import React, { useCallback } from "react";
import { useRouter } from "next/router";
import { BiArrowBack } from "react-icons/bi";

interface Props {
  label: string;
  showBackArrow?: boolean;
}

const Header: React.FC<Props> = ({ label, showBackArrow }) => {
  const router = useRouter();

  const handleBack = useCallback(() => router.back(), [router]);

  return (
    <header className="border-b-[1px] border-neutral-800 p-5">
      <div className="flex flex-row items-center gap-2">
        {showBackArrow && (
          <BiArrowBack
            onClick={handleBack}
            size={28}
            color="white"
            className="cursor-pointer hover:opacity-70 transition"
          />
        )}

        <h1 className="text-white text-xl font-semibold">{label}</h1>
      </div>
    </header>
  );
};

export default Header;

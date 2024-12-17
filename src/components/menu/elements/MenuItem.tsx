import { GlobalStateContext } from "@/contexts/GlobalStateContext";
import Link from "next/link";
import { useContext } from "react";

const MenuItem = ({ title }: { title: string }) => {
  const context = useContext(GlobalStateContext);

  return (
    <Link href={"/#" + title} onClick={context?.exitMenu}>
      {title}
    </Link>
  );
};

export default MenuItem;

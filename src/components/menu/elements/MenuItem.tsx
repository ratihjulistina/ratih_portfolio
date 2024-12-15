import { GlobalStateContext } from "@/contexts/GlobalStateContext";
import { useContext } from "react";

const MenuItem = ({ title }: { title: string }) => {
  const context = useContext(GlobalStateContext);

  return (
    <a href={"/#" + title} onClick={context?.exitMenu}>
      {title}
    </a>
  );
};

export default MenuItem;

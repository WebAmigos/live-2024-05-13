import { useContext } from "react";
import { BrandContext } from "./BrandContext";

export const Logo = () => {
  const context = useContext(BrandContext);

  return (
    <div>
      <p>{context.companyName}</p>
    </div>
  );
};

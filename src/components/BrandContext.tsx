import { createContext, useState } from "react";

type Brand = {
  companyName: string;
  logoUrl: string;
  colors: {
    primary: string;
    secondary: string;
    bgColor: string;
  };
};

const webAmigosBrand: Brand = {
  companyName: "Web Amigos",
  logoUrl: "https://exapmle.com",
  colors: {
    primary: "#f00",
    secondary: "#0f0",
    bgColor: "#00f",
  },
};

export const BrandContext = createContext<Brand>(webAmigosBrand);

export const BrandProvider = ({ children }: { children: React.ReactNode }) => {
  const [brand, setBrand] = useState(webAmigosBrand);
  return (
    <BrandContext.Provider value={brand}>{children}</BrandContext.Provider>
  );
};

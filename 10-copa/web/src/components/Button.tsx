import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const Button = ({ children }: Props) => {
  return (
    <button className="rounded bg-yellow-400 px-6 py-4 font-bold   uppercase text-gray-950">
      {children}
    </button>
  );
};

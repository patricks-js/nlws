import { InputHTMLAttributes } from "react";

type Props = {
  name: string;
} & InputHTMLAttributes<HTMLInputElement>;

export const Input = ({ name, ...rest }: Props) => {
  return (
    <input
      className="rounded border border-gray-600 bg-gray-700 px-4 py-4"
      name={name}
      {...rest}
    />
  );
};

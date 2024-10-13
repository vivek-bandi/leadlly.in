import { cn } from "@/utils/cn";

type Props = { className?: string };
const Menu = ({ className }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16.933 16.933"
      id="menu"
      className={cn("w-5 h-5 fill-none stroke-2", className)}
    >
      <path
        d="M12.271 1.323H1.984c-1.1-.042-1.1 1.63 0 1.588H12.23c1.08.042 1.122-1.588.042-1.588zM1.984 7.673c-1.058 0-1.058 1.587 0 1.587h5.8c1.08 0 1.08-1.587 0-1.587zm0 6.35c-1.058 0-1.058 1.587 0 1.587h12.997c1.058 0 1.058-1.587 0-1.587z"
        fill="#090e10"
      ></path>
    </svg>
  );
};
export default Menu;

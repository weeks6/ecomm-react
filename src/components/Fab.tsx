import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import "../blocks/fab.css";

type Props = {
  icon: string;
} & DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

function Fab({ icon, onClick, className }: Props) {
  return (
    <button className={`btn fab ${className}`} onClick={onClick}>
      <span className="material-icons">{icon}</span>
    </button>
  );
}

export default Fab;

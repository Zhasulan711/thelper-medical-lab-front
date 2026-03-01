import type { MouseEventHandler } from "react";

export type DefaultIconComponentProps = {
  width?: number | string;
  height?: number | string;
  onClick?: MouseEventHandler<SVGSVGElement>;
  isActive?: boolean;
  className?: string;
  filled?: boolean;
};
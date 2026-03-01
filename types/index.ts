import type { ComponentType, MouseEventHandler } from "react";

export type DefaultIconComponentProps = {
  width?: number | string;
  height?: number | string;
  onClick?: MouseEventHandler<SVGSVGElement>;
  isActive?: boolean;
  className?: string;
  filled?: boolean;
};

export type DefaultIconComponent = ComponentType<DefaultIconComponentProps>;
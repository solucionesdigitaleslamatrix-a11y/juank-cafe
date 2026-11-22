import type { ImgHTMLAttributes } from "react";
import { assetUrl } from "../utils/assets";

export interface LogoProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, "src" | "alt"> {
  alt?: string;
}

export default function Logo({ className = "block h-auto w-36", alt = "Juank Café", ...props }: LogoProps) {
  return (
    <img
      src={assetUrl("images/juank-cafe-logo.png")}
      alt={alt}
      width={160}
      height={120}
      decoding="async"
      className={className}
      {...props}
    />
  );
}

import { div } from "framer-motion/client";
import type { JSX } from "react";
import type React from "react";

interface plantillaProps{
    navbar: React.ReactNode;
    title: string;

}

export function Plantilla({
    navbar,
    title
}: plantillaProps):JSX.Element {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      {navbar}
      <h1 className="text-3xl font-bold">{title}</h1>
    </div>

  );
}
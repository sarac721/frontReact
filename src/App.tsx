import { Button } from "@heroui/react";
import { Plantilla } from "./Presentation/Components/template/Plantilla";
import type { JSX } from "react";

export function App(): JSX.Element {
  return (
    <>
      <div className="p-10 flex gap-4">
        <Button color="primary" className="text-4xl font-bold" isDisabled>Primary</Button>
        <Button color="secondary">Secondary</Button>
        <Button color="success">Success</Button>
        <Button color="danger">Danger</Button>
      </div>
      <Plantilla navbar={<div>Navbar </div>} title="Page Title" />
    </>
  );
}

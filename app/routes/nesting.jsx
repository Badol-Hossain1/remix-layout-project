import { Outlet } from "@remix-run/react";


export default function Nesting() {
  return (
    <div>
      <h1>this is parent route </h1>
      <section>
        <Outlet />
      </section>
    </div>
  );
}

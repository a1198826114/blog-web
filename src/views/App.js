import React, { Suspense } from "react";
import { useRoutes, BrowserRouter, Link } from "react-router-dom";
import routes from "../routes";
export default function App() {
  const Pages = () => useRoutes(routes);
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading....</div>}>
        <Pages />
      </Suspense>
    </BrowserRouter>
  );
}

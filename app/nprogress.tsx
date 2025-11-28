"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import NProgress from "nprogress";

import "nprogress/nprogress.css";
import "./nprogress-custom.css";

NProgress.configure({ showSpinner: false });

export default function NProgressBar() {
  const pathname = usePathname();

  useEffect(() => {
    NProgress.start();
    // NProgress.done();
    // Optionally, you can add a small delay for smoother effect
    setTimeout(() => NProgress.done(), 200);
  }, [pathname]);

  return null;
}

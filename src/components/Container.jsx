import { cn } from "@/lib/utils";
import React from "react";

const Container = ({ children, className }) => {
  return <div className={cn("max-w-screen-3xl mx-auto w-full px-2.5 md:px-20", className)}>{children}</div>;
};

export default Container;

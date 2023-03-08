"use client";
import { FC, PropsWithChildren } from "react";
import { Flowbite } from "flowbite-react";
import theme from "./flowbite-theme";

const Context: FC<PropsWithChildren> = function ({ children }) {
    return <Flowbite theme={{ theme }}>{children}</Flowbite>;
};

export default Context;

"use client";

import { Flowbite } from "flowbite-react";
import { FC, PropsWithChildren } from "react";
import { flowbiteTheme as theme } from "./theme";

const Context: FC<PropsWithChildren> = function ({ children }) {
    return <Flowbite theme={{ theme }}>{children}</Flowbite>;
};

export default Context;

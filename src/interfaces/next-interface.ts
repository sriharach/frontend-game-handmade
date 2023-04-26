import { NextPage } from "next";
import React from "react";

export type NextChildren = {
    children?: React.ReactNode
}

export type NextPageWithLayout = NextPage & {
    getLayout?: (page: React.ReactElement) => React.ReactNode
}
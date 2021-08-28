import React from "react";
import Header from "@/strHeader/hdr3";
import Footer from "@/strFooter/ftr3";
import Extra from "@/strExtra/index";
export default function Layout({children}) {
return (
<>
<Header />
{children}
<Footer />
<Extra />
</>
);
}


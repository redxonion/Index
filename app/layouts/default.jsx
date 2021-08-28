import React from "react";
import Header from "@/strHeader/hdr2";
import Footer from "@/strFooter/ftr2";
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

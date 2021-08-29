import React from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import Extra from "../common/Optional";
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
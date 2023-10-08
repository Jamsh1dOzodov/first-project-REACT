import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import '../../index.scss';

const Layout = (props) => {
    return (
        <>
            <Header />
            <main className="main home">{props.children}</main>
            <Footer />
        </>
    )
}

export default Layout;
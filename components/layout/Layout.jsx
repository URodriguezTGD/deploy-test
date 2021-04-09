import Head from "next/head";
import React from "react";
import Footer from "./Footer";
import NavBar from "./NavBar";
import { WhatsApp } from "./WhatsApp";

export default function Layout({ children }) {
    return (
        <>
            <Head>
                <title>Create Next App</title>
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"
                />
                <link
                    href="https://fonts.googleapis.com/icon?family=Material+Icons"
                    rel="stylesheet"
                />
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
                />
                <link
                    rel="stylesheet"
                    href="https://cdn.materialdesignicons.com/5.6.55/css/materialdesignicons.min.css"
                />
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
                />
                <link
                    href="https://fonts.googleapis.com/css?family=Poppins"
                    rel="stylesheet"
                ></link>
            </Head>
            <NavBar />
            <main>{children}</main>
            <WhatsApp />
            <Footer />
        </>
    );
}

"use client";
import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";

interface PropsType {
    children: ReactNode;  // Pastikan ini adalah 'children' bukan 'childern'
}

const AuthProvider = ({ children }: PropsType) => {
    return <SessionProvider>{children}</SessionProvider>;
};

export default AuthProvider;
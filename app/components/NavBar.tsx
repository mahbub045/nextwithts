"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";

const NavBar = () => {
  const { status, data: session } = useSession();
  return (
    <div className="flex bg-slate-200 p-3 space-x-3">
      <Link href="/">Home</Link>
      {status === "loading" && <div>Loading...</div>}
      {status === "authenticated" && <div>{session.user?.name}</div>}
      {status === "unauthenticated" && (
        <Link href="/api/auth/signin">Login</Link>
      )}
    </div>
  );
};

export default NavBar;
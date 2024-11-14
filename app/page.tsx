import { getServerSession } from "next-auth";
import Link from "next/link";
import { authOptions } from "./api/auth/[...nextauth]/route";
import ProductCard from "./components/ProductCard";

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <main>
      <h1 className="">Hello {session && <span>{session.user?.name}</span>}</h1>
      <Link href="./users">Users Page</Link>
      <ProductCard />
    </main>
  );
}

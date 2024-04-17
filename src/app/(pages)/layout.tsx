import Link from "next/link";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <header className="w-full py-8 mb-7">
        <div className="w-full flex items-center justify-between px-8">
          <span className="text-3xl italic text-purple-600 font-bold">
            S.O.L.I.D
          </span>

          <ul className="flex gap-4">
            <li>
              <Link href={"/home"}>Inversion Principle</Link>
            </li>
            <li>
              <Link href={"/single"}>Single Responsibility</Link>
            </li>
          </ul>
        </div>
      </header>
      <div>{children}</div>
    </main>
  );
}

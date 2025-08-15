import React from "react";
import Link from "next/link";
import { HomeIcon } from "lucide-react";

const links = [
  { href: "/policy", label: "Privacy Policy" },
  { href: "/policy/cookies", label: "Cookies Policy" },
  { href: "/policy/community-guidelines", label: "Community Guidelines" },
  {
    href: "/policy/children-safety",
    label: "Children’s Safety & Age Restriction Policy",
  },
  {
    href: "/policy/third-party-services",
    label: "Third-Party Services Policy",
  },
  { href: "/policy/copyright-takedown", label: "Copyright Takedown Policy" },
  { href: "/policy/terms-of-use", label: "Terms of Use" },
  { href: "/policy/dispute", label: "Dispute Resolution Policy" },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      {/* Top Navigation */}
      <nav
        className=" border-b-yellow flex justify-between  items-center fixed w-full bg-black"
        style={{
          padding: "20px 30px",
        }}
      >
        <Link
          href="/"
          className="text-none text-yellow-400 font-bolder text-[20px]"
        >
          <HomeIcon />
        </Link>
      </nav>

      {/* Page Content */}
      <main className="pt-[100px] w-[60%] mx-auto">
        {children}

        {/* Links to Other Policies */}
        <div className="max-w-3xl mx-auto p-5">
          <div className="mt-10">
            <h2 className="text-2xl font-bold mb-4">Other Policies</h2>
            <ul className="list-disc pl-6 space-y-2">
              {links.map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className="text-gray-600 hover:underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            </div>
          </div>
      </main>
    </div>
  );
}

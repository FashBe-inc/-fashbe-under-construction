import React from "react";

export default function Page() {
  const sections = [
    {
      title: "1.1 Introduction",
      items: [
        "These Terms of Use (“Terms”) govern your access to and use of FashBe’s mobile application, website, and related services (“FashBe” or “the Platform”).",
        "By accessing or using FashBe, you agree to be bound by these Terms and our other policies, which are incorporated by reference.",
      ],
    },
    {
      title: "1.2 Eligibility",
      items: [
        "You must be at least 18 years old to create an account, or have verifiable parental/guardian consent if under 18.",
        "You represent that you have the legal capacity to enter into these Terms.",
      ],
    },
    {
      title: "1.3 Account Responsibility",
      items: [
        "You are responsible for maintaining the confidentiality of your login credentials.",
        "You are liable for all activities under your account.",
      ],
    },
    {
      title: "1.4 Intellectual Property and Content Rights",
      items: [
        "By uploading content to FashBe, you grant us a worldwide, non-exclusive, royalty-free license to use, display, distribute, and modify your content for the purpose of operating, promoting, and improving the Platform.",
        "You represent that you own or have the necessary rights to any content you post.",
        "You acknowledge that FashBe is not responsible for copyright claims on music or other media you include in your content.",
        "You are solely responsible for ensuring you have the necessary permissions.",
        "You cannot use FashBe’s name, logo, or branding without written permission.",
      ],
    },
    {
      title: "1.5 Data Security Disclaimer",
      items: [
        "We implement encryption, secure servers, and access controls to protect your personal data.",
        "However, no system is 100% secure. You acknowledge this risk when using FashBe.",
      ],
    },
    {
      title: "1.6 Prohibited Uses",
      items: [
        "Engage in illegal activities e.g. scamming, gambling etc.",
        "Harass or abuse other users.",
        "Post harmful or unsafe content.",
        "Attempt to hack, reverse-engineer, or disrupt FashBe systems.",
      ],
    },
    {
      title: "1.7 Content Restrictions",
      items: [
        "Illegal, harmful, or offensive content.",
        "Pornographic or sexually explicit material.",
        "Content that infringes intellectual property rights.",
        "Hate speech, harassment, or abusive content.",
        "Content that contravenes with the community guidelines.",
      ],
    },
    {
      title: "1.8 Termination",
      items: [
        "We reserve the right to suspend or terminate accounts that violate these Terms or any of our policies.",
      ],
    },
    {
      title: "1.9 Dispute Resolution",
      items: [
        "Disputes will be governed by the laws of Nigeria if you reside in Nigeria, or by the overseas if you reside abroad without regard to conflict-of-law principles.",
      ],
    },
  ];

  return (
    <div className="max-w-3xl mx-auto p-5">
      <h1 className="text-3xl font-bold mb-8">Terms of Use</h1>

      {sections.map((section, index) => (
        <div key={index} className="mb-6">
          <h2 className="text-xl font-semibold mb-2">{section.title}</h2>
          <ul className="list-disc pl-6 space-y-1">
            {section.items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
          {/* <hr className="mt-4" /> */}
        </div>
      ))}
    </div>
  );
}

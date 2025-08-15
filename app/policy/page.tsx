import React from "react";
import Link from "next/link";

export default function Page() {


  const privacySections = [
    {
      title: "1. Information We Collect",
      items: [
        "Account Information: Name, email address, phone number, username, password.",
        "Profile Information: Photos, biography, interests.",
        "Uploaded Content: Photos, videos, music, captions.",
        "Device Information: IP address, browser type, device model, operating system.",
        "Usage Data: Pages visited, time spent, clicks.",
        "Parent/Guardian ID for users under 18 registering through a guardian.",
      ],
    },
    {
      title: "2. How We Use Your Information",
      items: [
        "Provide and improve FashBe’s services.",
        "Personalize your user experience and show tailored content.",
        "Moderate and review user-generated content.",
        "Detect, prevent, and address fraudulent or illegal activities.",
        "Comply with legal requirements.",
      ],
    },
    {
      title: "3. Legal Basis for Processing",
      items: [
        "Consent (e.g., when you register or upload content).",
        "Performance of a contract (to deliver services you request).",
        "Legitimate interests (to improve services and ensure security).",
        "Legal obligations (to comply with applicable laws).",
      ],
    },
    {
      title: "4. Sharing Your Information",
      items: [
        "Service providers who process data on our behalf.",
        "Law enforcement if required by applicable law.",
        "Third-party partners where you consent.",
        "We do not sell personal data.",
      ],
    },
    {
      title: "5. Your Rights",
      items: [
        "Access, correct, or delete your data.",
        "Withdraw consent at any time.",
        "Request data portability.",
      ],
    },
    {
      title: "6. Data Retention",
      items: [
        "We retain data for as long as necessary to provide services or comply with legal obligations.",
      ],
    },
    {
      title: "7. Security Measures",
      items: [
        "We use encryption, secure servers, and regular audits to protect data.",
      ],
    },
    {
      title: "8. International Data Transfers",
      items: [
        "Your data may be processed outside Nigeria. We ensure adequate protections are in place.",
      ],
    },
    {
      title: "9. Contact",
      items: ["If you have questions, contact:", "Email: support@fashbe.net"],
    },
  ];

  return (
    <div className="max-w-3xl mx-auto p-5">
      {/* Privacy Policy */}
      <h1 className="text-3xl font-bold mb-2">Privacy Policy</h1>
      <p className="text-sm text-gray-500 mb-6">
        Effective Date: 13 August 2025 | Last Updated: 13 August 2025
      </p>
      <p className="mb-6">
        <b>FashBe</b> is committed to protecting your privacy and ensuring
        transparency in how we collect, use, and protect your personal data.
        This Privacy Policy complies with the{" "}
        <b>Nigeria Data Protection Act (NDPA)</b> and{" "}
        <b>Global Data Protection Regulations (GDPR)</b> for international
        users.
      </p>

      {privacySections.map((section, index) => (
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

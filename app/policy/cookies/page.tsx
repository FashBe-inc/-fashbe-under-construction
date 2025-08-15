import React from "react";

export default function Page() {
  const sections = [
    {
      title: "1. What Are Cookies?",
      items: [
        "Cookies are small text files stored on your device to improve your experience.",
      ],
    },
    {
      title: "2. How We Use Cookies",
      items: [
        "Essential Cookies: Required for core functions.",
        "Performance Cookies: Measure site/app performance.",
        "Functional Cookies: Remember preferences.",
        "Advertising Cookies: Deliver relevant ads.",
      ],
    },
    {
      title: "3. Third-Party Cookies",
      items: [
        "Some cookies are placed by third parties such as analytics providers or advertisers.",
      ],
    },
    {
      title: "4. Managing Cookies",
      items: [
        "You can disable cookies in your browser, but some features may not work.",
      ],
    },
  ];

  return (
    <div className="max-w-3xl mx-auto p-5">
      <h1 className="text-3xl font-bold mb-2">Cookies Policy</h1>
      <p className="text-sm text-gray-500 mb-6">
        Effective Date: 13 August 2025
      </p>

      {sections.map((section, index) => (
        <div key={index} className="mb-6">
          <h2 className="text-xl font-semibold mb-8">{section.title}</h2>
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

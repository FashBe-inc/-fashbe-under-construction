import React from "react";

export default function Page() {
  const sections = [
    {
      title: "Third-Party Services Policy",
      items: [
        "FashBe may integrate third-party services providers e.g. payment channels etc.",
        "Use of third-party services is subject to their terms and licenses.",
        "FashBe is not liable for copyright issues arising from third-party service use.",
      ],
    },
  ];

  return (
    <div className="max-w-3xl mx-auto p-5">
      <h1 className="text-3xl font-bold mb-2">Third-Party Services Policy</h1>

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

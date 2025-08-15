import React from "react";

export default function Page() {
  const sections = [
    {
      title: "Community Guidelines",
      items: [
        "Respect Intellectual Property – Only upload content you own or have permission to use.",
        "No Harassment – No bullying, hate speech, religious or ethnic bigotry or threats.",
        "Safe Content – No sexually explicit material involving minors, violence, or illegal activity.",
        "Truthful Representation – No impersonation or false profiles.",
        "No Nudity or sexually explicit images.",
        "No bloody or violent scenes, or graphic content.",
        "No Dangerous stunts or body-shaming.",
        "No Use of Swear Words e.g. F**words in communication.",
      ],
    },
    {
      title: "Enforcement",
      items: ["Violation may result in account suspension or legal action."],
    },
  ];

  return (
    <div className="max-w-3xl mx-auto p-5">
      <h1 className="text-3xl font-bold mb-8">Community Guidelines</h1>

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

import React from "react";

export default function Page() {
  const sections = [
    {
      title: "Copyright Takedown Policy",
      items: [
        "Rights holders can submit takedown requests to Support@fashbe.net with:",
        "Your contact info.",
        "A description of the copyrighted work.",
        "The URL of the infringing content.",
        "A sworn statement (In-Court) of and Legal proof of ownership.",
        "FashBe will investigate and remove infringing material promptly.",
      ],
    },
  ];

  return (
    <div className="max-w-3xl mx-auto p-5">
      <h1 className="text-3xl font-bold mb-8">Copyright Takedown Policy</h1>

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

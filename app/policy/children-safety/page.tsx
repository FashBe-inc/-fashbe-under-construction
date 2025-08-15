import React from "react";

export default function Page() {
  const sections = [
    {
      title: "Children’s Safety & Age Restriction Policy",
      items: [
        "Users under 18 require parental/guardian registration.",
        "Parent/guardian must upload a valid government ID to verify consent.",
        "FashBe will not knowingly collect data from minors without consent.",
        "Parents remain responsible for their child’s activity on FashBe.",
      ],
    },
  ];

  return (
    <div className="max-w-3xl mx-auto p-5">
      <h1 className="text-3xl font-bold mb-8">
        Children’s Safety & Age Restriction Policy
      </h1>

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

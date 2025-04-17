import { useState } from "react";

type Sections = {
  id: string;
  title: string;
  content: string;
}[];

const sections: Sections = [
  {
    id: "1",
    title: "Section 1",
    content: "Content for section 1",
  },
  {
    id: "2",
    title: "Section 2",
    content: "Content for section 2",
  },
  {
    id: "3",
    title: "Section 3",
    content: "Content for section 3",
  },
];

export const Accordion = () => {
  const [openSections, setOpenSections] = useState(new Set());

  return (
    <div>
      <h4>Accordion</h4>

      {sections.map((section) => (
        <div key={section.id} className="border-b border-gray-200">
          <div
            className="flex justify-between items-center p-4 cursor-pointer"
            onClick={() => {
              const newOpenSections = new Set(openSections);
              if (newOpenSections.has(section.id)) {
                newOpenSections.delete(section.id);
              } else {
                newOpenSections.add(section.id);
              }
              setOpenSections(newOpenSections);
            }}
          >
            <h5 className="text-lg font-semibold">{section.title}</h5>
            <span>{openSections.has(section.id) ? "-" : "+"}</span>
          </div>
          {openSections.has(section.id) && (
            <div className="p-4 text-gray-700">{section.content}</div>
          )}
        </div>
      ))}
    </div>
  );
};

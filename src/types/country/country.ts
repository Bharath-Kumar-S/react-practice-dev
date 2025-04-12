export type Country = {
  isoCode: string;
  name: {
    language: string;
    text: string;
  }[];
  officialLanguages: string[];
};

export type Holiday = {
  id: string;
  startDate: string;
  endDate: string;
  type: string;
  name: [
    {
      language: string;
      text: string;
    }
  ];
  regionalScope: string;
  temporalScope: string;
  nationwide: true;
};

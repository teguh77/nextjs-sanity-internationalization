export type Post = {
  _id: string;
  title: string;
  language: string;
  slug: {
    [lang: string]: {
      current: string;
    };
  };
  description: string;
  _translations: [
    {
      slug: {
        [lang: string]: {
          current: string;
        };
      };
    },
  ];
};

export type Translation = {
  path: string;
  language: string;
};

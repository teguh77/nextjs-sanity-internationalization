const languages = [
  { id: 'en', title: 'English' },
  { id: 'id', title: 'Indonesian', isDefault: true },
];

const i18n = {
  languages,
  base: languages.find((item) => item.isDefault)?.id,
};

export { i18n };

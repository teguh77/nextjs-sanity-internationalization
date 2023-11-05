import { getPostByLang } from '@/sanity/sanity.utils';
import Header from '@/app/components/Header';
import { i18n } from '@/i18n.config';
import { Translation } from '@/types';

type Props = {
  params: { lang: string; slug: string };
};

export default async function SlugPage({ params }: Props) {
  const post = await getPostByLang(params.lang, params.slug);

  const postTranslationSlugs: { [key: string]: { current: string } }[] =
    post?._translations.map((item) => {
      const newItem: { [key: string]: { current: string } } = {};

      for (const key in item.slug) {
        if (key !== '_type') {
          newItem[key] = { current: item.slug[key].current };
        }
      }
      return newItem;
    });

  const translations = i18n.languages.reduce<Translation[]>((acc, lang) => {
    const translationSlug = postTranslationSlugs
      ?.reduce(
        (acc: string[], slug: { [key: string]: { current: string } }) => {
          const current = slug[lang.id]?.current;
          if (current) {
            acc.push(current);
          }
          return acc;
        },
        [],
      )
      .join(' ');

    return translationSlug
      ? [
          ...acc,
          {
            language: lang.id,
            path: `/${lang.id}/${translationSlug}`,
          },
        ]
      : acc;
  }, []);

  return (
    <>
      <Header translations={translations} />
      <h1>Title : {post?.title}</h1>
      <p>Description : {post?.description}</p>
    </>
  );
}

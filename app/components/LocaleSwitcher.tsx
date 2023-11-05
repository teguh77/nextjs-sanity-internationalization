'use client';

import { i18n } from '@/i18n.config';
import { Translation } from '@/types';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import React, { useMemo } from 'react';

type Props = {
  translations?: Translation[];
};

const LocaleSwitcher = ({ translations }: Props) => {
  const params = useParams();

  const availableTranslations = useMemo<Translation[]>(
    () =>
      i18n.languages.reduce<Translation[]>((acc, cur) => {
        const availableTranslation = translations?.find(
          (translation) => translation.language === cur.id,
        );
        return availableTranslation ? [...acc, availableTranslation] : acc;
      }, []),
    [translations],
  );

  return (
    <label className="relative inline-flex cursor-pointer select-none items-center 2xl:pt-4 pt-4 md:pt-0 justify-center">
      <div className="shadow-card flex p-[2px] items-center justify-center rounded-md bg-black">
        {availableTranslations.map((version) => (
          <Link
            key={version.language}
            href={version.path}
            locale={version.language}
            className={`flex h-8 w-8 items-center justify-center rounded uppercase ${
              params?.lang == version.language
                ? 'bg-white text-black'
                : 'bg-black text-white'
            }`}
          >
            {version.language}
          </Link>
        ))}
      </div>
    </label>
  );
};

export default LocaleSwitcher;

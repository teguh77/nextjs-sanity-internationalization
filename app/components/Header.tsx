import { Translation } from '@/types';
import LocaleSwitcher from './LocaleSwitcher';

type Props = {
  translations?: Translation[];
};

export default async function Header({ translations }: Props) {
  return (
    <header className="p-6 border-b border-b-gray-60 mb-4">
      <nav className="container flex items-center justify-between">
        <ul className="flex gap-x-8">
          <li>link1</li>
          <li>link2</li>
        </ul>
        <LocaleSwitcher translations={translations} />
      </nav>
    </header>
  );
}

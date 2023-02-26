import type { LinksFunction, LoaderArgs } from '@remix-run/node';
import { json } from '@remix-run/node';
import {
	Links,
	LiveReload,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
	useLoaderData,
} from '@remix-run/react';
import { useTranslation } from 'react-i18next';

import { useChangeLanguage } from '~/hooks/useChangeLanguage';
import i18next from '~/i18next.server';
import TailwindStyles from '~/tailwind.css';
import MainStyles from '~/index.css';

export const links: LinksFunction = () => [
	{ rel: 'stylesheet', href: TailwindStyles },
	{ rel: 'stylesheet', href: MainStyles }
];

export async function loader({ request }: LoaderArgs) {
	const locale = await i18next.getLocale(request);
	return json({ locale });
}

export const handle = {
	i18n: 'common',
};

// eslint-disable-next-line import/no-default-export
export default function Root() {
	const { locale } = useLoaderData<typeof loader>();
	const { i18n } = useTranslation();
	useChangeLanguage(locale);
	return (
		<html lang={locale} dir={i18n.dir()}>
			<head>
				<Meta />
				<Links />
			</head>
			<body>
				<Outlet />
				<ScrollRestoration />
				<Scripts />
				<LiveReload />
			</body>
		</html>
	);
}

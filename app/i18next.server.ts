import { resolve } from 'node:path';

import Backend from 'i18next-fs-backend';
import { RemixI18Next } from 'remix-i18next';

import i18n from '~/i18n';

const i18next = new RemixI18Next({
	detection: {
		supportedLanguages: i18n.supportedLngs,
		fallbackLanguage: i18n.fallbackLng,
	},
	i18next: {
		...i18n,
		backend: {
			loadPath: resolve('./public/locales/{{lng}}.json'),
		},
	},
	backend: Backend,
});

// eslint-disable-next-line import/no-default-export
export default i18next;

import { motion } from 'framer-motion';

import { LanguagesData } from '../../constants/languages';
import MeshPurple from '../../images/mesh-purple.svg';
import { Section } from '../shared/section';
import { getAltTextFromFileName } from '../shared/utils';

export const Languages = () => {
	return (
		<Section title="Languages" className="flex flex-col">
			<div className="grid grid-cols-1 md:grid-cols-4 gap-x-32 gap-y-20 max-w-7xl mx-auto">
				{LanguagesData.map(language => {
					return (
						<div className="col-span-1 relative m-auto" key={language.language}>
							<img
								alt=""
								aria-hidden="true"
								height={800}
								width={600}
								className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10 w-[300%] h-[200%]"
								src={MeshPurple}
							/>
							<motion.img
								loading="lazy"
								initial="hidden"
								whileInView="visible"
								className="mb-2"
								viewport={{ amount: 0.1, once: true }}
								transition={{ duration: 0.7 }}
								variants={{
									visible: { opacity: 1, y: 0 },
									hidden: { opacity: 0, y: 100 },
								}}
								width="130"
								height="130"
								alt={getAltTextFromFileName(language.icon)}
								src={language.icon}
							/>
							<div className="font-bold text-md">{language.language}</div>
							<div className="text-base mt-1">{language.level}</div>
						</div>
					);
				})}
			</div>
		</Section>
	);
};

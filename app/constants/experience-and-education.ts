import KukaLogo from '../images/kuka.svg';
import MaibornWolffLogo from '../images/maibornwolff.svg';
import MeWithMacbookImg from '../images/me-with-macbook.webp';
import ScmtLogo from '../images/scmt.svg';
import ThWildauLogo from '../images/th-wildau.svg';
export const EXPERIENCE_YEARS =
	new Date().getFullYear() - new Date('2015-02').getFullYear();

export const education: ExperiencAndEductionType[] = [
	{
		logo: ThWildauLogo,
		logoHeight: 55,
		link: 'https://www.th-wildau.de/',
		title: 'Mechanical Engineering (B. Eng.)',
		location: 'Wildau, Germany',
		startDate: new Date('2011-09'),
		endDate: new Date('2014-08'),
		type: 'education',
	},
	{
		logo: ScmtLogo,
		logoHeight: 60,
		link: 'https://www.scmt.com/home.html',
		title: 'Master of Business Engineering (MBE®)',
		location: 'Filderstadt, Germany',
		startDate: new Date('2016-02'),
		endDate: new Date('2018-04'),
		type: 'education',
	},
];

export const WorkExperienceData: ExperiencAndEductionType[] = [
	{
		logo: KukaLogo,
		logoHeight: 20,
		link: 'https://www.kuka.com/',
		title: 'Software Engineer - Virtual Commissioning',
		startDate: new Date('2015-02'),
		endDate: new Date('2018-04'),
		location: 'Augsburg, Germany',
		type: 'work',
	},
	{
		logo: KukaLogo,
		logoHeight: 20,
		link: 'https://www.kuka.com/',
		title: 'Area Manager  - Virtual Commissioning',
		startDate: new Date('2018-04'),
		endDate: new Date('2019-05'),
		location: 'Augsburg, Germany',
		type: 'work',
	},
	{
		logo: MaibornWolffLogo,
		logoHeight: 50,
		link: 'https://www.maibornwolff.de/',
		title: 'Senior Software Engineer',
		startDate: new Date('2019-05'),
		endDate: new Date('2023-02'),
		location: 'Munich, Germany',
		type: 'work',
	},
	{
		logo: MeWithMacbookImg,
		logoHeight: 50,
		link: 'https://www.linkedin.com/in/christianjoecker/',
		title: 'Freelance Full-Stack Developer & UX/UI Designer',
		startDate: new Date('2023-02'),
		endDate: 'today',
		location: 'Valencia, Spain',
		type: 'work',
	},
];

export type ExperiencAndEductionType = {
	logo: string;
	logoHeight: number;
	link: string;
	title: string;
	location: string;
	startDate: Date;
	endDate: Date | 'today';
	type: 'education' | 'work';
};

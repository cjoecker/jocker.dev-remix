export type Props = {
	title?: string;
	children: React.ReactNode;
	className?: string;
};
export const Section = ({ title, children, className }: Props) => {
	return (
		<section className={`mb-[30vh] last:mb-12 max-w-[100vw] mx-4 ${className}`}>
			{title && <h2 className="text-xl mb-12">{title}</h2>}

			{children}
		</section>
	);
};

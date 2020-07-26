export interface ProjectInterface {
	title: string;
	image: string | null;
	description: string;
	date: string;
	tags: string[];
	link?: string;
	order: number;
	views?: number;
}

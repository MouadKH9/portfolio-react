export interface SiteInfo {
	description: string;
	services: Service[];
	socialMedia: SocialMedia[];
}

export interface Service {
	title: string;
	description: string;
	icon: string;
}

export interface SocialMedia {
	title: string;
	link: string;
	icon: string;
}

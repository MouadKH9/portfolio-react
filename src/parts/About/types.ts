export interface SiteInfo {
	description: string;
	services: Service[];
}

export interface Service {
	title: string;
	description: string;
	icon: string;
}

export interface LinkModel {
	id: string;
	url: string;
	slug: string;
	creatorId: string;
}

export interface LinksFirebaseModel {
	createdAt: string;
	creatorId: string;
	shortUrl: string;
	url: string;
	newUrl: string;
	id: string;
}

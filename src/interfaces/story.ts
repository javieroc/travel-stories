export interface Story {
  id: number;
  attributes: {
    title: string;
		subtitle: string;
    story: string;
    date: string;
    slug: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
}

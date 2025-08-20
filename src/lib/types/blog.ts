export interface BlogPost {
    id: number;
    title: string;
    slug: string;
    excerpt: string;
    content: string;
    publishedAt: Date;
    tags: string[];
    image_url: string;
}
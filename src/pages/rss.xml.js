import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
	const posts = await getCollection('blog');

	return rss({
		title: "Cristian Ruben | Blog",
		description: "Cuando no estoy programando, escribo sobre diseño de interfaces, programación y hobbies.",
		site: context.site,
		items: posts.map((post) => ({
			...post.data,
			link: `/blog/${post.slug}/`,
		})),
	});
}

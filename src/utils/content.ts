// 글·프로젝트 목록을 "최신순"으로 꺼내는 함수. 여러 페이지에서 같은 규칙으로 쓰기 위해 한곳에 둔다.
import { getCollection } from 'astro:content';

export async function getPublishedPosts() {
	const posts = await getCollection('blog', ({ data }) => !data.draft);
	return posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

export async function getProjects() {
	const projects = await getCollection('projects');
	return projects.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

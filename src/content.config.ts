// 블로그 글과 포트폴리오 항목의 "형식"을 정의한다.
// .md 파일 맨 위(frontmatter)에 필수 항목이 빠지면 빌드할 때 바로 오류로 알려 준다.
import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		tags: z.array(z.string()).default([]),
		draft: z.boolean().default(false), // true 면 사이트에 나오지 않는다
	}),
});

const projects = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		date: z.coerce.date(),
		tech: z.array(z.string()).default([]),
		link: z.url().optional(), // 서비스 주소
		repo: z.url().optional(), // 소스 코드 주소
	}),
});

export const collections = { blog, projects };

// 사이트 전체에서 쓰는 기본 정보. 이름·소개 문구는 여기 한 곳만 고치면 모든 페이지에 반영된다.

export const SITE_TITLE = '장준혁';
export const SITE_DESCRIPTION =
	'대용량 미디어 전송·아카이브와 AI 분석 시스템을 만드는 풀스택 개발자 장준혁의 홈페이지';

export const AUTHOR = {
	name: '장준혁',
	role: '풀스택 개발자',
	bio: '방송사와 국가기관의 대용량 미디어를 옮기고, 보관하고, AI로 분석하는 시스템을 만듭니다. Electron 전송 에이전트, React 아카이브 웹, GPU 서버 MLOps를 직접 개발했고, 고객 현장의 운영과 장애 대응까지 맡아 왔습니다.',
	links: [
		{ label: 'GitHub', href: 'https://github.com/miami1942' },
		{ label: 'Email', href: 'mailto:wkdgmd7386@gmail.com' },
	],
};

// 상단 메뉴. 새 페이지를 만들면 여기에 한 줄 추가한다.
export const NAV_ITEMS = [
	{ label: '홈', href: '/' },
	{ label: '블로그', href: '/blog' },
	{ label: '포트폴리오', href: '/projects' },
	{ label: '이력', href: '/resume' },
];

// 사이트 전체에서 쓰는 기본 정보. 이름·소개 문구는 여기 한 곳만 고치면 모든 페이지에 반영된다.

export const SITE_TITLE = '여기에 이름';
export const SITE_DESCRIPTION = '여기에 한 줄 소개를 적어 주세요.';

export const AUTHOR = {
	name: '여기에 이름',
	role: '여기에 직무 (예: 백엔드 개발자)',
	bio: '여기에 자기소개 두세 문장을 적어 주세요. 무엇을 좋아하고, 어떤 일을 해 왔고, 앞으로 무엇을 하고 싶은지.',
	links: [
		{ label: 'GitHub', href: 'https://github.com/miami1942' },
		{ label: 'Email', href: 'mailto:your-email@example.com' },
	],
};

// 상단 메뉴. 새 페이지를 만들면 여기에 한 줄 추가한다.
export const NAV_ITEMS = [
	{ label: '홈', href: '/' },
	{ label: '블로그', href: '/blog' },
	{ label: '포트폴리오', href: '/projects' },
	{ label: '이력', href: '/resume' },
];

# My-Homepage

Astro로 만들고 GitHub Pages에 올리는 개인 홈페이지(자기소개 · 블로그 · 포트폴리오 · 이력).

- 배포 주소: https://miami1942.github.io/
- 필요 환경: Node.js 22.23.4 이상 (권장 24 LTS)

## 실행 방법

| 명령어 | 하는 일 |
| :-- | :-- |
| `npm install` | 처음 한 번, 필요한 패키지 설치 |
| `npm run dev` | 로컬 미리보기 → http://localhost:4321 |
| `npm run build` | 배포용 파일을 `dist/` 에 생성 |
| `npm run preview` | 빌드 결과를 로컬에서 확인 |

## 구조

```
src/
├ consts.ts            ← 이름·소개·메뉴 (여기부터 고치면 됨)
├ content.config.ts    ← 글·프로젝트 항목 형식
├ content/blog/        ← 블로그 글 (.md 하나 = 글 하나)
├ content/projects/    ← 포트폴리오 항목
├ layouts/             ← 공통 틀
├ components/          ← 머리글·바닥글·카드 등 부품
├ styles/global.css    ← 색·글꼴
└ pages/               ← 파일 하나 = 주소 하나
  ├ index.astro            → /
  ├ blog/index.astro       → /blog
  ├ blog/[slug].astro      → /blog/글이름
  ├ projects/index.astro   → /projects
  ├ projects/[slug].astro  → /projects/이름
  └ resume.astro           → /resume
```

## 자주 하는 일

- **글 쓰기**: `src/content/blog/주소.md` 파일을 만들고 맨 위에 `title`, `description`, `pubDate`를 적는다.
- **프로젝트 추가**: `src/content/projects/주소.md` 파일을 만든다.
- **새 페이지**: `src/pages/info/abc.astro`를 만들면 `/info/abc` 주소가 생긴다. 메뉴에 넣으려면 `src/consts.ts`의 `NAV_ITEMS`에 추가한다.

## 배포

`main` 브랜치에 push 하면 `.github/workflows/deploy.yml`이 자동으로 빌드해서 GitHub Pages에 올린다.

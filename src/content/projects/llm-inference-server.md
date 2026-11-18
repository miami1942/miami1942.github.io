---
title: '사내 분산 LLM 추론 서버'
description: 'GPU 두 대를 llama.cpp RPC로 묶어 Gemma 4 26B급 모델을 여러 사용자에게 제공하는 사내 서비스'
date: 2026-01-01
period: '2026 · 사내 서비스'
tech: ['llama.cpp', 'Python', 'systemd', 'Docker', 'Open WebUI']
---

## 개요

GPU 두 대를 llama.cpp RPC로 묶어 Gemma 4 26B급 모델을 여러 사용자에게 제공하는 사내 LLM 서비스입니다.
업무 밖에서 로컬 LLM을 직접 운영해 보며 만들었습니다.

## 만든 것

- **OpenAI 호환 프록시와 대기열** — 기존 OpenAI 방식 클라이언트를 그대로 붙일 수 있고, 여러 사용자의 요청을 순서대로 처리합니다.
- **워치독** — 30초마다 헬스체크를 하고, 연속 3회 실패하면 서버를 자동으로 재시작합니다.
- **실시간 관리 대시보드**

## 성능

- 생성 속도: 약 43 tok/s
- 프롬프트 처리: 약 60 tok/s

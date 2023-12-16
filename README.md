# pnpm-monorepo 구축

## Todo

- [x] monorepo 구축
- [ ] Turborepo CI 구축

## Prestart 1. pnpm 설치

- <a href="https://pnpm.io/installation"> pnpm 설치 홈페이지 </a>

## 1. pnpm setting

```sh
    ## root
    pnpm init
    touch pnpm-workspace.yaml
```

## 2. Project Setting

- 현재 폴더위치 기준 Folder들을 pnpm-workspace에 Setting 합니다.

```sh
    ## Example pnpm-workspace.yaml
    packages:
    - './apps/*'              ## Front, Backend
    - './packages/*'          ## 공용 코드 및 라이브러리

    ## 보통의 파일 시스템을 아래와 함께 통일 합니다
    root
        |- apps
            |- [project-1]
            |- [project-2]
            |- [project-3]
        |- packages
            |- [project-1]
            |- [project-2]
```

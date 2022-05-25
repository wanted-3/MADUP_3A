# 매드업

## 배포
https://628e7d5391f3252a6497b336--madup3a.netlify.app

## 기술 스택

|                                                                                                                                            |                                                                                                                          |                                                                                                                                 |     |
| :----------------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------: | :-: |
| <img src="https://img.shields.io/badge/typescript-3178C6.svg?style=for-the-badge&logo=typescript&logoColor=white%22%3E" alt="typescript"/> | <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black%22/%3E" alt="react"/> | <img src="https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white%22/%3E" alt="redux"/> |

<br/>

## 폴더 구조

```sh
src
│
├─ data  # 초기 wanted 데이타 파일이 있는 폴더 (ex wanted_FE_trend-data-set.json)
├─ assets  # 이미지 파일(svg)을 모아놓은 폴더
├─ hooks # redux dispatch, selector를 위한 hook
├─ components  # 컴포넌트를 모아놓은 폴더
│     ├─ DropdownCompo  # 드랍다운
│     ├─ datepicker  # 달력을 위한 datepicker
│     ├─ header # header 선택 바
│     └─ navBar  # nav 선택 바
├─ routes # 페이지별로 렌더링 화면을 보는 폴더
│     ├─ page1  # 통합 광고 현황, 매체 현황
│     └─ page2  # 광고 관리
├─ redux  # 리덕스 설정을 위한 slice, store, ts 등의 파일이 있는 폴더
├─ styles  # CSS 스타일을 위한 폴더
├─ types  # Typescript 정의 파일
└─ utils  # data format 해주는 유틸 파일이 있는 폴더

```

<br/>

## 진행과정

**기간 : 5월 23일 ~ 25일**

1일) 과제 요구사항 확인 및 설계 논의 - 컴포넌트별 업무분담
2일) API 및 필요한 기술 학습 및 구현, git 에러 해결 및 작업
3일) git merge 및 마무리 작업

<br/><br/>

## 실행방법

### 1. 프로젝트 받아오기

```
git clone https://github.com/wanted-3/MADUP_3A.git
```

### 2. 설치

```sh
yarn install && yarn start
```

yarn을 이용하여 프로젝트를 설치한다

### 3. 기본동작

- 기본 로딩 된 경우 2월 1일 - 2월 7일에 해당하는 데이터를 보여준다.
- 헤더바에 DatePicker 달력을 누르면 통계치가 [시작 날짜, 끝 날짜]를 선택할 수 있다
- 두 날짜를 선택하면, 해당하는 통계치를 보여준다
- 라우터 페이지를 통해 이동시킬 수 있다

  <br/><br/>

## 구현한 방법

### '통합광고현황'을 위해 이전 데이터와 비교하는 통계치 구현

- 데이터 다 받아와서 필요한 포맷으로 바꿔주고 normalization을 써서 두 그래프의 축을 비슷하게 맞춰주었습니다

### '매체현황', '광고관리' 구현

### 리덕스를 활용한 DatePicker 날짜 및 데이터 저장

- **redux**를 활용해서 DatePicker 날짜를 저장하고 해당 날짜에 해당하는 데이터를 가공하여 victory.js를 통해 그래프로 나타낼 수 있는 형태로 바꾸었습니다

<br/>

## 구현할 때 어려운 점

### API를 활용하는 정보를 찾는 것이 어려웠고

### 미숙한 리덕스와 타입스크립트를 심화있게 사용하려니 어려웠습니다

# calculator

## 목표
아래와 같은 계산기 어플리케이션을 웹 페이지로 구현
<br/>
https://www.askdavetaylor.com/wp-content/uploads/2015/08/mac-calculator-tricks-2.png

### STEP 1.&nbsp;&nbsp;&nbsp;*HTML 구조 잡기*

- 위 이미지와 같은 계산기 레이아웃을 구성하기 위해 html태그 작성
- 'calculator'라는 css 클래스 이름을 가지는 div태그를 어플리케이션의 가장 상위 태그로 작성<br/>```<div class="calculator">...</div>```

### STEP 2.&nbsp;&nbsp;&nbsp;*레이아웃 & 스타일링*

- 계산기 전체 크기는 240px * 320px
- 글자, 버튼 색상은 마음대로
- 왼쪽 상단에 빨강, 노랑, 초록 버튼도 구현할 것

### STEP 3.&nbsp;&nbsp;&nbsp;*기능 구현*

- 숫자 입력 이벤트 구현
- 사칙연산과 '=' 구현
- clear기능 구현
- 소수점 지원 (실수 연산)
- +/- 부호 변경 기능 구현
- '%'대신 숫자 1개 지우는 기능 구현

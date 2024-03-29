# 쇼핑몰 웹 서비스 프로젝트
### Elice-sw2-shoppingmall
2022.05.23 ~ 06.03 엘리스 SW track 2기 1차 팀프로젝트로 진행한 쇼핑몰 사이트입니다.

## 1. 기획의도

복합한 상품 발주 과정으로 인해 어려움을 겪는 소상공인을 위해 구상하였으며,
다양한 식품을 도매,소매로 구분하여 판매하는 쇼핑몰 웹 서비스 프로젝트입니다. <br />

<br>

## 2. 서비스 소개
쇼핑몰의 제품등록, 장바구니 추가, 주문하기 등의 서비스 구현

1. 회원가입, 로그인, 회원정보 수정 및 탈퇴 등 사용자 관련 CRUD를 할 수 있습니다.
2. 카테고리별, 제품, 주문 관련 CRUD를 할 수 있습니다.
3. 장바구니 관련 기능을 프론트 단에서 수행(sessionStorage 이용)할 수 있습니다.
4. 관리자 페이지가 있습니다.

## 2.1 API 문서
https://documenter.getpostman.com/view/20914545/Uz5Ardjg


## 3. 기술 스택

![image](https://i.ibb.co/N34mXzy/image.png)

<br />

## 4. 구현한 기능 소개 <br>

### 페이지별 화면
<details><summary>페이지별 화면 상세 이미지</summary>
 
|  |  |
| -------------------------------------------------------- | -------------------------------------------------------------------|
|![image](https://user-images.githubusercontent.com/98244487/172752838-398930da-f50b-49e8-8970-feeee9f81378.png) |![image](https://user-images.githubusercontent.com/98244487/172753232-d772b29d-e40e-4d29-847e-4b9aab29ac4b.png)|
|    메인 페이지                                |      회원가입 화면                      |
| ![image](https://user-images.githubusercontent.com/98244487/172753126-0bbb1b20-0e8b-45bd-b1ca-863cbb95c72c.png) | ![image](https://user-images.githubusercontent.com/98244487/172753356-1b9bc2e8-7acc-4f14-9676-ccc29d51b721.png) |
|    로그인 페이지                              |   전체 상품 페이지                         |
| ![image](https://user-images.githubusercontent.com/98244487/172753631-0c61b656-39d6-4e73-8bf5-aa9706ca6057.png)|  ![image](https://user-images.githubusercontent.com/98244487/172753702-4fbbf33e-435b-44dd-bd7f-f31afa3f30db.png)|
| 상품 상세 페이지                              |                        장바구니 페이지     |
|![image](https://user-images.githubusercontent.com/98244487/172754192-4a9b747d-13fa-4e51-a460-0d0cdc0300f4.png) |![image](https://user-images.githubusercontent.com/98244487/172754349-155e184c-0a9f-406b-9a0a-4d2e1015757c.png)|
|  주문 페이지                                  |   주문 조회 페이지                      |
|![image](https://user-images.githubusercontent.com/98244487/172754408-ff66ac19-735c-44ca-89b2-9369e84117bf.png)|![image](https://user-images.githubusercontent.com/98244487/172754633-fac4e3d1-bca2-4d57-8bfe-711ad5f6a037.png) |
|  사용자 마이페이지                            |    관리자 상품 등록 페이지           |
|![image](https://user-images.githubusercontent.com/98244487/172762599-874c9125-db2c-4f6c-b70f-b4a04a86ebfb.png)|![image](https://user-images.githubusercontent.com/98244487/172762462-f76f63b4-37e7-44dc-8981-11879ba7a603.png)|
|   관리자 상품 수정/삭제 페이지 | 관리자 상품 조회 페이지 |
|![image](https://user-images.githubusercontent.com/98244487/172762645-9201f80c-3cb7-4838-9e49-b2fc3af320eb.png) | |
| 관리자 주문 조회/ 취소 페이지 | |



  </details>
  
### 기능소개
<details><summary> 기능소개 상세 </summary>
#### 1. 회원가입, 로그인, 회원정보 수정 <br>
    1.1 email, password 유효성 검증 **
        프론트엔드, 백엔드 정책 통일

    1.2 admin 계정 별도 관리 **
        프론트에서 일반 계정으로 로그인한 사용자는 관리자용 화면을 볼 수 없음 <br>
        -->  어드민경로로 직접 접근시 화면은 보이지만 팝업 에러

    1.3 회원정보 수정 유효성 검증 
        1.1과 동일

    1.4 회원정보 주소 등록 **
        다음 api 를 이용해 우편번호, 주소지를 등록

    1.5 일반 유저에게 관리자 경로 제공x 
        마이페이지에서 일반 유저는 관리자 페이지로 이동하는 경로 삭제

#### 2. [제품 목록 페이지](https://kdt-gitlab.elice.io/sw_track/class_02_seoul/web_project/team4/team4/-/tree/main/src/views/itemList)  <br>
    2.1 카테고리 클릭 시 해당하는 상품 출력 
    2.2 Intersection Observer를 활용한 무한 스크롤 구현 **

#### 3. [제품 상세 페이지](https://kdt-gitlab.elice.io/sw_track/class_02_seoul/web_project/team4/team4/-/tree/main/src/views/itemInfo) <br>
    3.1 수량 조절 기능 구현 
    3.2 장바구니 기능 (sessionStorage 활용)

#### 4. [장바구니 페이지](https://kdt-gitlab.elice.io/sw_track/class_02_seoul/web_project/team4/team4/-/tree/main/src/views/cart)<br>
    4.1 sessionStroage로 장바구니 목록 렌더링

    4.2 수량 조절 및 삭제 기능
        개별 수량 조절 및 개별 삭제, 선택 삭제, 일괄 삭제 기능, 새로고침해도 적용 수량 유지
        -> 이벤트 위임 방식으로 DOM 최적화 **

    4.3 결제금액 0원일 시 주문 불가 및 주문 완료 후 뒤로가기로 장바구니 페이지 접근 시 오류 처리 **

#### 5. [결제 페이지](https://kdt-gitlab.elice.io/sw_track/class_02_seoul/web_project/team4/team4/-/tree/main/src/views/cart)<br>
    5.1 주소 및 우편번호 검색 기능(Daum 주소 API 사용) **

    5.2 기본 배송지 정보 불러오기 기능 **
        불러오기 버튼 클릭 시 마이페이지에 미리 입력된 배송지 정보 자동입력

    5.2 배송 정보 유효성 검사

    5.3 주문 완료 시 정보 DB로 전송 및 주문완료 페이지 이동
        주문 완료 페이지에서 주문조회 페이지로 이동 가능

#### 6. 유저 주문기록 확인 기능<br>
    6.1 **주문 기록 열람, 취소** 
        로그인 계정의 주문 기록을 상세히 나타냄

#### 7. [어드민 페이지](https://kdt-gitlab.elice.io/sw_track/class_02_seoul/web_project/team4/team4/-/tree/main/src/views/adminPage)
    7.1 상품 CRUD 기능
        상품 아이디 검색을 통해 특정 상품 수정/삭제가 가능합니다. (주문 조회에서 상품 아이디 확인)
    7.2 주문 조회/취소
    7.3 기능별 모듈로 관리
    7.4 jwt 토큰을 통한 user role 확인

 </details>
 
####  백엔드<br>
    8.1 admin required 미들웨어 
        상품등록, 상품정보 수정, 삭제와 장바구니 전체목록 조회, 전체 유저 목록 조회에 관리자 외 접근 차단 
        
    8.2  validator 기능 추가 
        사용자 이메일, 비밀번호에 대해 프론트의 요청 재검증 및 브라우저 외의 불법 경로로 서버접근 차단  
        상품 정보 중 가격에 대해 타입 체크

    8.3 error handler 강화 
        예상 가능한 에러 처리에 대한 기능 강화 

    8.4 path alias로 경로 정리 
        백엔드 경로는 alias 처리해 경로 
    
    8.5 asyncHandler 활용 확대
        반복되는 try ~ catch 문을 정리해 코드 간소화
    
    8.6 ES6 import export 문법 사용
        모듈 호출에 require 대신 최신 문법 적용 
    



### 프로젝트 역할 분담
|이름|역할|구현 기능|
|---|---|---|
|이준서|**L/Frontend**|1. 팀 프로젝트 리딩 <br> <a href='https://kdt-gitlab.elice.io/sw_track/class_02_seoul/web_project/team4/team4/-/tree/main/src/views/itemList'>2. 제품 목록 페이지</a> <br> <a href='https://kdt-gitlab.elice.io/sw_track/class_02_seoul/web_project/team4/team4/-/tree/main/src/views/itemInfo'>3. 제품 상세 페이지</a> <br> <a href='https://kdt-gitlab.elice.io/sw_track/class_02_seoul/web_project/team4/team4/-/tree/main/src/views/adminPage'>4. 어드민 페이지</a>|
| 성경주 | Frontend |<a href='https://kdt-gitlab.elice.io/sw_track/class_02_seoul/web_project/team4/team4/-/tree/main/src/views/login'>1. 로그인 </a> <br> <a href='https://kdt-gitlab.elice.io/sw_track/class_02_seoul/web_project/team4/team4/-/tree/main/src/views/register'>2. 회원가입</a> <br> <a href='https://kdt-gitlab.elice.io/sw_track/class_02_seoul/web_project/team4/team4/-/tree/main/src/views/mypage'>3. 마이페이지</a> <br> <a href='https://kdt-gitlab.elice.io/sw_track/class_02_seoul/web_project/team4/team4/-/tree/main/src/views/header'>4. 헤더 작업</a> <br> <a href='https://kdt-gitlab.elice.io/sw_track/class_02_seoul/web_project/team4/team4/-/tree/main/src/views/security'>5. 사용자 정보 수정, 삭제</a> <br> <a href='https://kdt-gitlab.elice.io/sw_track/class_02_seoul/web_project/team4/team4/-/tree/main/src/views/orderlist'>6. 주문목록 조회, 취소</a>|
| 황채림 | Frontend |<a href='https://kdt-gitlab.elice.io/sw_track/class_02_seoul/web_project/team4/team4/-/tree/main/src/views/home'>1. 메인페이지</a> <br> <a href='https://kdt-gitlab.elice.io/sw_track/class_02_seoul/web_project/team4/team4/-/tree/main/src/views/cart'>2. 장바구니</a> <br> <a href='https://kdt-gitlab.elice.io/sw_track/class_02_seoul/web_project/team4/team4/-/tree/main/src/views/order'>3. 결제</a> 및 <a href='https://kdt-gitlab.elice.io/sw_track/class_02_seoul/web_project/team4/team4/-/tree/main/src/views/orderComplete'>주문완료</a>|
| 권필주 | Backend | 1. 상품 관련 DB 모델링 및 전체 api 작성 <br> 2. validator middleware <br> 3. error handler(협업)|
| 윤민주 | Backend | |


## 회고
백엔드로 참여한 첫 번째 프로젝트였다.

1순위는 작동하는 코드 구현. 

2순위는 간결하고 튼튼하고 남이 보기에도 쉬운 코드 작성.

그리고 무엇보다 "백은 프론트를 기다리게 해서는 안된다"는 원칙.

시간의 압박을 기분 좋은 채찍질로 생각했다. 팀원들끼리의 소통이 중요하다. 부족한 점이 많지만 기한 내 마무리하고 서비스를 마칠 수 있어 뿌듯했다.

코드면에서는

* api 작성시 프론트와 백의 경계(또는 역할 분리)에 대해 고민해야했다. "데이터 가공은 백에서 모두 처리하고 프론트는 화면에 뿌려주는 역할만 한다"를 기준으로 코드를 짰다.

* db, service, controller의 3계층 분리. 특히 controller층에서 service의 내용이 들어가지 않도록 주의했다.   
  

#### 배운점
* express 프레임워크 사용법 
* 미들웨어 작성
* mongoDB의 유연함 실감

#### 아쉬운 점
* clean code - 몇 달 뒤 작성한 코드를 다시 보면 리팩토링 할 부분이 많이 보일 것 같다.
* error handler에서 예상치 못한 에러를 500 에러로 처리한 점. 500은 가능한 발생하지 않도록 해야한다.
* 소셜로그인, 메일 인증, 결제 서비스 등 3rd party library를 많이 활용하지 못했다.


<details><summary>설치 방법</summary>

1. `.env` 파일 설정 (MONGODB_URL 환경변수를, 개인 로컬 혹은 Atlas 서버 URL로 설정해야 함)

2. express 실행

```bash
# npm 을 쓰는 경우 
npm install
npm run start

# yarn 을 쓰는 경우
yarn
yarn start
```

<br>
</details>



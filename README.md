# 🥦에이라이프 농산물 공동구매 플랫폼
## ⚡️애플리케이션 프로토 타입
--------------------------
### 🥑현재 진행 상황🥑

#### 1. Login Page
+ 자체 로그인
+ 구글 로그인
    + How
        + 구글 제공 로그인 예제를 통해 작업
            + Xcode(iOS), AndroidStudio(Android) Native 작업 필요 
            + [Google Firebase]:https://firebase.google.com/official 
            + [Reference]:https://bangc.tistory.com/12
#### 2. Main Tap
+ List, ScrollView

#### 3. Setting Tab

##### 3-1. 판매 게시글 폼
+ 폼 선택
    + 현재 폼 선택 Modal만 구현
    + 폼 선택 시 폼 전환 기능 추가 예정
+ 사진 다중 추가
    + react-native-customized-picker
        ###### install
        ```
        $ npm install react-native-customized-picker
        ```
        + if iOS

        ```
        $ cd ios && pod install && cd ..
        ```
        ###### Reference, Example
        [react-native-customized-picker]:https://github.com/liukefu2050/react-native-customized-image-picker
##### 3-2. 로그아웃 
+ 버튼 클릭 시 로그아웃 Alert 출력
+ 여부 묻고 로그아웃 진행
+ 로그아웃 후 로그인 페이지로 전환
##### 3-3. 알림 설정
##### 3-4. 내 정보
##### 3-5. 공지사항
##### 3-6. FAQ
##### 3-7. 고객 센터
##### 3-8. 회원 탈퇴



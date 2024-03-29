import {Router} from 'express';
import is from '@sindresorhus/is';

//path alias 사용하기 위해 필요한 모듈
import 'module-alias/register';
import {loginRequired} from '@middlewares';
import {adminRequired} from '@middlewares';
import {validateLogin, validateSignup} from '@middlewares';
import {userService} from '@services';
import {asyncHandler} from '@asyncHandler';
import {CustomError} from '@error';

const userRouter = Router();

// 회원가입 api (아래는 /register이지만, 실제로는 /api/user/register로 요청해야 함.)
userRouter.post(
  '/register',
  validateSignup,
  asyncHandler(async (req, res, next) => {
    // Content-Type: application/json 설정을 안 한 경우, 에러를 만들도록 함.
    // application/json 설정을 프론트에서 안 하면, body가 비어 있게 됨.
    // validateSignup으로 req.body가 비어있는 경우 걸러지므로 하기 코드는 불용.

    // if (is.emptyObject(req.body)) {
    //   throw new Error(
    //     'headers의 Content-Type을 application/json으로 설정해주세요'
    //   );
    // }

    // req (request)의 body 에서 데이터 가져오기
    const fullName = req.body.fullName;
    const email = req.body.email;
    const password = req.body.password;

    // 위 데이터를 유저 db에 추가하기
    const newUser = await userService.addUser({
      fullName,
      email,
      password,
    });

    // 추가된 유저의 db 데이터를 프론트에 다시 보내줌
    // 물론 프론트에서 안 쓸 수도 있지만, 편의상 일단 보내 줌
    res.status(201).json(newUser);
  })
);

// 로그인 api (아래는 /login 이지만, 실제로는 /api/user/login로 요청해야 함.)
userRouter.post(
  '/login',
  validateLogin,
  asyncHandler(async function (req, res, next) {


    // req (request) 에서 데이터 가져오기
    const email = req.body.email;
    const password = req.body.password;

    // 로그인 진행 (로그인 성공 시 jwt 토큰을 프론트에 보내 줌)
    const userToken = await userService.getUserToken({email, password});

    // jwt 토큰을 프론트에 보냄 (jwt 토큰은, 문자열임)
    res.status(200).json(userToken);
  })
);

// 전체 유저 목록을 가져옴 (배열 형태임)
// 미들웨어로 loginRequired 를 썼음 (이로써, jwt 토큰이 없으면 사용 불가한 라우팅이 됨)
//postman에서 조회 가능. 브라우저에서 직접 접근 불가
userRouter.get(
  '/userlist',
  loginRequired,
  adminRequired,
  asyncHandler(async function (req, res, next) {
    // 전체 사용자 목록을 얻음
    const users = await userService.getUsers();

    // 사용자 목록(배열)을 JSON 형태로 프론트에 보냄
    res.status(200).json(users);
  })
);

//개별 사용자 정보 조회
userRouter.get(
  '/userlist/:useremail',
  loginRequired,
  asyncHandler(async (req, res, next) => {
    if (is.emptyObject(req.params)) {
      throw new CustomError(400, '조회하려는 사용자 이름이 정확한지 확인해주세요.');
    }
    const {useremail} = req.params;

    const user = await userService.getUser(useremail);
    console.log('user from router: ', user);
    res.status(200).json(user);
  })
);

// 사용자 정보 수정
userRouter.patch(
  '/userlist/:useremail',
  loginRequired,
  asyncHandler(async function (req, res, next) {
    // content-type 을 application/json 로 프론트에서
    // 설정 안 하고 요청하면, body가 비어 있게 됨.
    if (is.emptyObject(req.body)) {
      throw new CustomError(400, 'headers의 Content-Type을 application/json으로 설정해주세요');
    }

    // params로부터 id를 가져옴
    const useremail = req.params.useremail;

    // body data 로부터 업데이트할 사용자 정보를 추출함.
    const fullName = req.body.fullName;
    const password = req.body.password;
    const address = req.body.address;
    const phoneNumber = req.body.phoneNumber;
    const role = req.body.role;

    // body data로부터, 확인용으로 사용할 현재 비밀번호를 추출함.
    const currentPassword = req.body.currentPassword;

    // currentPassword 없을 시, 진행 불가
    if (!currentPassword) {
      throw new CustomError(400, '정보를 변경하려면, 현재의 비밀번호가 필요합니다.');
    }

    const userInfoRequired = {useremail, currentPassword};

    // 위 데이터가 undefined가 아니라면, 즉, 프론트에서 업데이트를 위해
    // 보내주었다면, 업데이트용 객체에 삽입함.
    const toUpdate = {
      ...(fullName && {fullName}),
      ...(password && {password}),
      ...(address && {address}),
      ...(phoneNumber && {phoneNumber}),
      ...(role && {role}),
    };

    // 사용자 정보를 업데이트함.
    const updatedUserInfo = await userService.setUser(userInfoRequired, toUpdate);

    // 업데이트 이후의 유저 데이터를 프론트에 보내 줌
    res.status(200).json(updatedUserInfo);
  })
);

// 사용자 정보 삭제
userRouter.delete('/userlist/:useremail', loginRequired, async function (req, res, next) {
  try {
    // content-type 을 application/json 로 프론트에서
    // 설정 안 하고 요청하면, body가 비어 있게 됨.
    if (is.emptyObject(req.body)) {
      throw new CustomError(400, '정보를 변경하려면, 현재의 비밀번호가 필요합니다.');
    }

    // params로부터 id를 가져옴
    const useremail = req.params.useremail;

    // body data로부터, 확인용으로 사용할 현재 비밀번호를 추출함.
    const currentPassword = req.body.password;

    // currentPassword 없을 시, 진행 불가
    if (!currentPassword) {
      throw new CustomError(400, '정보를 변경하려면, 현재의 비밀번호가 필요합니다.');
    }

    const userInfoRequired = {useremail, currentPassword};

    await userService.deleteUser(userInfoRequired);

    // 업데이트 이후의 유저 데이터를 프론트에 보내 줌
    res.status(200).json({message: '성공'});
  } catch (error) {
    next(error);
  }
});

// 로그아웃
userRouter.get('/logoutCheck', (req, res) => {
  console.log(req.user);
});

export {userRouter};

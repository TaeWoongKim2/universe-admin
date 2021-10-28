/**
 *
 * @param {*} param0
 * @returns
 */
const SERVICE_DOMAIN = () => 'http://3.34.191.212:9090';
const APPLICATION_JSON_UTF8 = () => 'application/json;charset=UTF-8';

/**
 * 관리자 페이지 로그인 요청
 * @param {*} userId 관리자 계정
 * @param password 관리자 계정 패스워드
 * @param fcmToken
 * @returns 인증 토큰
 */
export async function postLogin({
  userId,
  password,
  fcmToken = '',
}) {
  const url = `${SERVICE_DOMAIN()}/api/user/signin`;
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': APPLICATION_JSON_UTF8,
      accept: APPLICATION_JSON_UTF8,
    },
    body: JSON.stringify({
      userId,
      password,
      fcmToken,
    }),
  });
  const responseObject = await response.json();
  const { roles } = responseObject;
  console.log(response, responseObject);

  if (roles.includes('ROLE_ADMIN')) {
    alert('아이디 및 패스워드를 확인해주세요!');
    return responseObject;
  }

  alert('아이디 및 패스워드를 확인해주세요!');
  return {};
}

// TODO: make something new!!!
export async function toDo() {
  return null;
}

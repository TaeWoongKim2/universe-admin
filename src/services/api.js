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
export async function postLogin({ userId, password, fcmToken = '' }) {
  const url = `${SERVICE_DOMAIN()}/api/user/signin`;
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': APPLICATION_JSON_UTF8(),
      accept: APPLICATION_JSON_UTF8(),
    },
    body: JSON.stringify({
      userId,
      password,
      fcmToken,
    }),
  });
  if (!response.ok) {
    alert('아이디 및 패스워드를 확인해주세요!');
    return null;
  }

  const body = await response.json();
  const { roles } = body;
  if (!roles.includes('ROLE_ADMIN')) {
    alert('관리자 권한이 없는 계정입니다!');
    return null;
  }

  return body;
}

/**
 * 모든 서비스 사용자 목록을 불러옵니다.
 * @param fcmToken
 * @returns 서비스 사용자 목록
 * http 3.34.191.212:9090/api/user 'Authorization:Bearer {token}'
 */
export async function getUsers({ type = 'Bearer', token }) {
  const response = await fetch(`${SERVICE_DOMAIN()}/api/user`, {
    method: 'GET',
    headers: {
      'Content-Type': APPLICATION_JSON_UTF8(),
      accept: APPLICATION_JSON_UTF8(),
      Authorization: `${type} ${token}`,
    },
  });

  const body = await response.json();
  return body;
}

/**
 * 한 명에 사용자에 대해 서비스 사용을 승인합니다.
 * @param type 인증방식
 * @param fcmToken 인증토큰
 * @param id 서비스 사용 승인할 사용자 아이디
 * http 3.34.191.212:9090/api/user 'Authorization:Bearer {token}'
 */
export async function validUser({ type = 'Bearer', token, id }) {
  const response = await fetch(`${SERVICE_DOMAIN()}/api/user/valid`, {
    method: 'PATCH',
    headers: {
      'Content-Type': APPLICATION_JSON_UTF8(),
      accept: APPLICATION_JSON_UTF8(),
      Authorization: `${type} ${token}`,
    },
    body: JSON.stringify({
      id,
    }),
  });

  if (!response.ok) {
    alert('아이디 및 패스워드를 확인해주세요!');
    return null;
  }
  return response.ok;
}

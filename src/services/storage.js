/**
 * 브라우저 로컬 스토리지에 데이터 저장
 * @param {*} key 저장할 데이터의 키값
 * @param {*} value 저장할 데이터
 */
export function saveItem(key, value) {
  localStorage.setItem(key, value);
}

/**
 * 브라우저 로컬 스토리지에 저장된 데이터 호출
 * @param {*} key 호출할 데이터의 키값
 * @returns 키값에 해당하는 데이터
 */
export function loadItem(key) {
  return localStorage.getItem(key);
}

/**
 * 브라우저 로컬 스토리지에 저장된 데이터 삭제
 * @param {*} key 호출할 데이터의 키값
 */
export function removeItem(key) {
  localStorage.removeItem(key);
}

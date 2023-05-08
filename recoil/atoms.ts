import { atom } from 'recoil';

// 선택된 답변
const selectedAnswerAtom = atom<string | null>({
  key: 'selectedAnswer',
  default: null,
});

// 최종 MBTI 유형 정보를 나타내는 atom
// export const mbtiTypeAtom = atom<string | null>({
//   key: 'mbtiType',
//   default: null,
// });

// 사용자 이름을 나타내는 atom
// export const usernameAtom = atom<string>({
//   key: 'username',
//   default: '',
// });

export default selectedAnswerAtom;
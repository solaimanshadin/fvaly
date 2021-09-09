export const getCaptcha = (captcha: string): string => {
  // prettier-ignore
  const allCharacters = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
    'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
    'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y',
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
  ];

  for (let i = 0; i < 5; i++) {
    let randomCharacter =
      allCharacters[Math.floor(Math.random() * allCharacters.length)];
    captcha += ` ${randomCharacter}`;
  }
  return captcha;
};

export const resetContent = (captcha: string): any => {
  captcha = '';
  getCaptcha(captcha);
};

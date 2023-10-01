export interface IAuth {
  email: string;
  password: string;
  id: string;
}

export interface IUserData {
  users: IAuth[];
}

export interface IWord {
  id: string;
  value: string;
}
export interface IWords {
  words: IWord[];
}

export const isStringArray = (arr: unknown): arr is string[] => {
  if (Array.isArray(arr) && arr.every((e) => typeof e === 'string')) {
    return true;
  }
  return false;
};

export const isString = (param: unknown): param is string => {
  if (typeof param === 'string') return true;
};

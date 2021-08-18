/** ユーザーモデル */
export interface User {
  /** ユーザーID*/
  id?: number;
  /** コメント*/
  comment: string;
}

export interface RequestUser {
  /** コメント*/
  message: string;
}

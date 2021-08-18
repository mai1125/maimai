/** ユーザーモデル */
export interface Board {
  /** ユーザーID*/
  id?: number;
  /** コメント*/
  comment: string;
  /** コメント*/
  name: string;
}

export interface RequestMessage {
  /** コメント*/
  message: string;
}

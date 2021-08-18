/** ユーザーモデル */
export interface Board {
  /** ユーザーID*/
  id?: number;
  /** コメント*/
  comment: string;
}

export interface RequestMessage {
  /** コメント*/
  message: string;
}

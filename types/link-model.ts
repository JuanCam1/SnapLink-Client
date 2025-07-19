export interface LinkModel {
  description: string;
  title: string;
  originalUrl: string;
  time: number;
  password?: string;
  userId: string;
}

export interface LinkUpdateModel extends LinkModel {
  id: string;
}

export type LinkStateModel = "public" | "private";
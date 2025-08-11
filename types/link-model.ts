export interface LinkModel {
  id: string;
  title: string;
  originalUrl: string;
  shortUrl: string;
  time: number;
  password?: string;
  userId: string;
  state: StateModel;
  createdAt: Date;
}

export interface StateModel {
  id: number;
  name: string;
}

export interface LinkUpdateModel extends LinkModel {
  id: string;
}

export type LinkStateModel = "public" | "private";

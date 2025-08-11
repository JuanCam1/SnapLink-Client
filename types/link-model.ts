export interface LinkModel {
  id: string;
  description: string;
  title: string;
  originalUrl: string;
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

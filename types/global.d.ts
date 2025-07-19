import type { LinkModel, LinkStateModel, LinkUpdateModel } from "./link-model";


declare global {
  type LinkModelI = LinkModel;
  type LinkUpdateModelI = LinkUpdateModel;
  type LinkStateModelI = LinkStateModel;
}
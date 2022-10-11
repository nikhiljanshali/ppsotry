import { environment } from "../../environments/environment";

// fall back configurations
export const Config = {
  isServed: false,
  API: {
    apiRoot: environment.apiRoot,
  },
  MyKey: 'default value',
  ExtraKeys: 'wont harm',
};

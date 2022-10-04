import { AppinitService } from "./shared/common-services";

export function initializeApp(appInitService: AppinitService) {
  return (): Promise<any> => {
    // return appInitService.Init();
  }
}

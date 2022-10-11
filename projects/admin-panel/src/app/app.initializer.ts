import { AppinitService } from '../core/services/appinit.service';

export function initialAppSetup(provider: AppinitService) {

  return () => provider.loadAppConfig();
}

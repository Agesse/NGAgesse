import { enableProdMode } from "@angular/core";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

import { environment } from "./environments/environment";
import { AgesseModule } from "./app/agesse.module";

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AgesseModule)
  .catch(err => console.log(err));

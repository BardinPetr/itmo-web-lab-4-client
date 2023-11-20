import {NgModule} from "@angular/core";
import {environment} from '../../environments/environment';
import {ApiModule, Configuration} from 'itmo-web-lab4';

export function apiConfigFactory(): Configuration {
  return new Configuration({
    basePath: environment.apiUrl,
  });
}

@NgModule({
  imports: [ApiModule.forRoot(apiConfigFactory)],
  exports: [ApiModule]
})
export class ApiConfigModule {
}

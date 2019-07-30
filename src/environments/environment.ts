// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  GO_DB2_API: 'http://localhost:8080/predict',
  IBM_WML_API: 'https://us-south.ml.cloud.ibm.com/v3/wml_instances/ee215244-7c33-4ffb-ae7f-e2aac55d92f4/deployments/3cfaa43b-4cae-403a-a4ed-db8b3de009dd/online',
  NODE_HOST: 'http://localhost:8888'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

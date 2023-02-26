// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  dietasRoute: "assets/dietas",
  horariosRoute: "assets/horarios",
  dietaPaginacionlocalstorage: "20c15e9960a8c7a7e98969c4fc786d83",
  horarios : [
    {nombre:"Isabel",link:"isabel"},
    {nombre:"Rodrigo",link:"rodrigo"}
  ],
  dietas : [
    {nombre:"Dieta del bocadillo (semanas)",link:"dietabocadillo1"},
    {nombre:"Dieta del bocadillo (días)",link:"dietabocadillo2"},
  ],
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
